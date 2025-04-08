import { resolve } from "path";
import {
  EnumDeclarationStructure,
  InterfaceDeclarationStructure,
  OptionalKind,
  Project,
  PropertySignatureStructure,
  SourceFile,
  StructureKind,
} from "ts-morph";

// paths
const rootDir = resolve(process.cwd(), "..", "backend");
const outputFilePath = resolve(process.cwd(), "src", "generated.ts");

// helper function to find dto or enum files in a directory
function getDtoOrEnumFiles(
  sourceFiles: SourceFile[],
  fileType: "dto" | "enum"
) {
  return sourceFiles.filter((file) => file.getFilePath().includes(fileType));
}

// Function to map types (e.g., replace id's type with 'UUID')
function mapPropertyType(type: string): string {
  if (type === "`${string}-${string}-${string}-${string}-${string}`") {
    return "UUID";
  }
  return type;
}

// main function to generate the output file
async function main() {
  const project = new Project({
    tsConfigFilePath: resolve(rootDir, "tsconfig.json"),
  });

  const interfaceDefinitions: InterfaceDeclarationStructure[] = [];
  const enumDefinitions: EnumDeclarationStructure[] = [];

  // specify the source files to be used
  project.addSourceFilesAtPaths(`${rootDir}/src/**/*.ts`);
  const dtoFiles = getDtoOrEnumFiles(project.getSourceFiles(), "dto");
  const enumFiles = getDtoOrEnumFiles(project.getSourceFiles(), "enum");

  // Create the source file and add the comment
  const sourceFile = project.createSourceFile(
    outputFilePath,
    `/**
       * This file is generated by a script. Do not edit this file.
       * Last update on ${new Date().toISOString()}
       */
       `,
    { overwrite: true }
  );

  // Add the crypto import at the top of the file
  sourceFile.addImportDeclaration({
    moduleSpecifier: "crypto",
    namedImports: ["UUID"],
    isTypeOnly: true,
  });

  // Loop through the dto files and classes to generate the class definitions
  dtoFiles.forEach((file) => {
    const classes = file.getClasses();
    classes.forEach((cls) => {
      const extendsClause = cls.getExtends()?.getText();
      const interfaceStructure: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: cls.getName()!,
        isExported: true,
        ...(cls.getTypeParameters().length > 0 && {
          typeParameters: cls.getTypeParameters().map((tp) => ({
            name: tp.getName(),
            constraint: tp.getConstraint()?.getText?.(),
          })),
        }),
        ...(extendsClause && { extends: [extendsClause] }),
        properties: cls.getProperties().map((prop) => {
          const typeText = mapPropertyType(prop.getType().getText());
          return {
            name: prop.getName(),
            hasQuestionToken: prop.hasQuestionToken(),
            type: typeText.startsWith("import(")
              ? (typeText.split(".").pop() ?? typeText)
              : typeText,
          } as OptionalKind<PropertySignatureStructure>;
        }),
      };
      interfaceDefinitions.push(interfaceStructure);
    });
  });

  enumFiles.forEach((file) => {
    const enums = file.getEnums();
    enums.forEach((enm) => {
      const enumStructure: EnumDeclarationStructure = {
        kind: StructureKind.Enum,
        name: enm.getName(),
        isExported: true,
        members: enm.getMembers().map((member) => ({
          name: member.getName(),
          value: member.getValue(),
        })),
      };
      enumDefinitions.push(enumStructure);
    });
  });

  // Add the class definitions to the source file
  interfaceDefinitions.forEach((interfaceDefinition) => {
    sourceFile.addInterface(interfaceDefinition);
  });
  enumDefinitions.forEach((enumDefinition) => {
    sourceFile.addEnum(enumDefinition);
  });

  sourceFile.saveSync();
}

main().then(console.log).catch(console.error);
