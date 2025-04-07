import { JSX } from "react";
import { useFormContext } from "react-hook-form";
import { AnswerTrueFalseDto } from "../utils/questions.types";

export function AnswerTrueFalse(): JSX.Element {
  const { register } = useFormContext<AnswerTrueFalseDto>();

  return (
    <label>
      <span>True or False</span>
      <input type="checkbox" {...register("answer.correctAnswer")} />
    </label>
  );
}
