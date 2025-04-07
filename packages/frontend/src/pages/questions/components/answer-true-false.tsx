import { JSX } from "react";
import { useFormContext } from "react-hook-form";
import { CreateQuestionDto, EQuestionType } from "../utils/questions.types";

type AnswerTrueFalseDto = Extract<
  CreateQuestionDto,
  { type: EQuestionType.TRUE_FALSE }
>;

export function AnswerTrueFalse(): JSX.Element {
  const { register } = useFormContext<AnswerTrueFalseDto>();

  return (
    <label>
      <span>True or False</span>
      <input type="checkbox" {...register("answer.correctAnswer")} />
    </label>
  );
}
