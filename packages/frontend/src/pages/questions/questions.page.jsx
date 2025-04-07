import { CreateQuestion } from "./components/create-question";
import { ListQuestions } from "./components/list-questions";

export function QuestionsPage() {
  return (
    <>
      <h3>List of Questions</h3>
      <ListQuestions />

      <h3>Create a Question</h3>
      <CreateQuestion />
    </>
  );
}
