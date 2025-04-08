import { JSX } from "react";
import { useFormContext } from "react-hook-form";
import { Headline, Input, LabelInput } from "~/components";

type AnswerNumericProps = {
  label: string;
};

export function AnswerNumeric(
  props: Readonly<AnswerNumericProps>
): JSX.Element {
  const { label } = props;

  const { register } = useFormContext();

  return (
    <>
      <Headline as={"h4"}>Antwort</Headline>

      <LabelInput label={label}>
        <Input
          type="number"
          {...register("answer.correctAnswer", { valueAsNumber: true })}
        />
      </LabelInput>
    </>
  );
}
