import { useFormContext } from "react-hook-form";

export function AnswerFileQuestion() {
  const { register } = useFormContext();

  return (
    <>
      <input type="file" {...register("answer.file")} />
      <input {...register("answer.correctAnswer")} />
    </>
  );
}
