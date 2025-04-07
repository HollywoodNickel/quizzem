import { JSX } from "react";
import CreateQuestion from "./components/create-question";

export function QuestionsPage(): JSX.Element {
  return (
    <>
      <h3>Create a Question</h3>
      <CreateQuestion />
    </>
  );
}
