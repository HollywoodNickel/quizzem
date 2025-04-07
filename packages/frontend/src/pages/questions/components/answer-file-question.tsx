import { JSX } from "react";
import { useFormContext } from "react-hook-form";
import { CreateQuestionDto, EQuestionType } from "../utils/questions.types";

type FileQuestionDto = Extract<
  CreateQuestionDto,
  {
    type:
      | EQuestionType.IMAGE_QUESTION
      | EQuestionType.VIDEO_QUESTION
      | EQuestionType.MUSIC_QUESTION;
  }
>;

export function AnswerFileQuestion(): JSX.Element {
  const { register } = useFormContext<FileQuestionDto>();

  return (
    <>
      <input type="file" {...register("answer.file")} />
      <input {...register("answer.correctAnswer")} />
    </>
  );
}
