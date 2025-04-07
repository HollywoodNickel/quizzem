import { Headline } from "~/components";
import { CreateQuestion } from "./components/create-question";
import { ListQuestions } from "./components/list-questions";

export function QuestionsPage() {
  return (
    <main className="p-4">
      <Headline as={"h3"}>List of Questions</Headline>
      <ListQuestions />

      <Headline as={"h3"}>Create a Question</Headline>
      <CreateQuestion />
    </main>
  );
}
