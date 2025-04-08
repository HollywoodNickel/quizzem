import { JSX } from "react";
import { useFormContext } from "react-hook-form";
import { Headline, Input, LabelInput } from "~/components";

export function AnswerFileQuestion(): JSX.Element {
  const { register } = useFormContext();

  return (
    <>
      <Headline as={"h4"}>Antwort</Headline>

      <div className="flex flex-col gap-4">
        <LabelInput label={"Wähle eine Datei aus"}>
          <input
            type="file"
            className="file-input w-full"
            {...register("answer.file")}
          />
        </LabelInput>

        <LabelInput label={"Richtige Antwort"}>
          <Input {...register("answer.correctAnswer")} />
        </LabelInput>
      </div>
    </>
  );
}
