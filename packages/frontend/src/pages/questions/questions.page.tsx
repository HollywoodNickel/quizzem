import { RiCloseLine } from "@remixicon/react";
import { JSX, useState } from "react";
import { Button, Headline, IconButton, Slider } from "~/components";
import { CreateQuestion } from "~/pages/questions/components/create/create-question";
import { ListQuestions } from "~/pages/questions/components/list/list-questions";

export function QuestionsPage(): JSX.Element {
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
            <RiCloseLine />
          </IconButton>
        </div>
        <CreateQuestion />
      </Slider>
    </main>
  );
}
