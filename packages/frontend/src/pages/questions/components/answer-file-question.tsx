import { JSX } from "react";
import { useFormContext } from "react-hook-form";
import { AnswerFileDto } from "../utils/questions.types";

export function AnswerFileQuestion(): JSX.Element {
  const { register } = useFormContext<AnswerFileDto>();

  return (
    <>
      <input type="file" {...register("answer.file")} />
      <input {...register("answer.correctAnswer")} />
    </>
  );
}
