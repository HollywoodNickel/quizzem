import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Button, Headline, IconButton, Slider } from "~/components";
import { CreateQuestion } from "./components/create-question";
import { ListQuestions } from "./components/list-questions";

export function QuestionsPage() {
  const [openCreate, setOpenCreate] = useState(false);
  return (
    <main className="p-4">
      <Headline as={"h3"}>Liste von Fragen</Headline>
      <ListQuestions />

      <Button onClick={() => setOpenCreate(true)}>Frage erstellen</Button>

      <Slider open={openCreate} setOpen={setOpenCreate}>
        <div className="flex justify-between items-center">
          <Headline as={"h3"}>Create a Question</Headline>
          <IconButton onClick={() => setOpenCreate(false)}>
            <IconX />
          </IconButton>
        </div>
        <CreateQuestion />
      </Slider>
    </main>
  );
}
