import { JSX } from "react";
import { useFormContext } from "react-hook-form";
import { AnswerNumericDto } from "../utils/questions.types";

type AnswerNumericProps = { label: string };

export function AnswerNumeric(
  props: Readonly<AnswerNumericProps>
): JSX.Element {
  const { label } = props;

  const { register } = useFormContext<AnswerNumericDto>();

  return (
    <label>
      <span>{label}</span>
      <input
        type="number"
        {...register("answer.correctAnswer", { valueAsNumber: true })}
      />
    </label>
  );
}
