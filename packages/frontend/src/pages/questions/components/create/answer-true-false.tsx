import { JSX } from "react";
import { useFormContext } from "react-hook-form";
import { Checkbox, Headline, LabelInput } from "~/components";

export function AnswerTrueFalse(): JSX.Element {
  const { register } = useFormContext();

  return (
    <>
      <Headline as={"h4"}>Antwort</Headline>

      <LabelInput label={"Ist die Behauptung korrekt?"}>
        <Checkbox {...register("answer.correctAnswer")} />
      </LabelInput>
    </>
  );
}
