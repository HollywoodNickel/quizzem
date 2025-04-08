import { Headline } from "~/components";
import { ListCategories } from "~/pages/categories/components/list/list-categories";

export function CategoriesPage() {
  return (
    <main className="p-4">
      <Headline as={"h3"}>Liste der Kategorien</Headline>
      <ListCategories />

      <Headline as={"h3"}>Kategorie erstellen</Headline>
      {/* <CreateCategory /> */}
    </main>
  );
}
