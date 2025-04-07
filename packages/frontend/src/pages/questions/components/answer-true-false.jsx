import { useFormContext } from "react-hook-form";

export function AnswerTrueFalse() {
  const { register } = useFormContext();

  return (
    <label>
      <span>True or False</span>
      <input type="checkbox" {...register("answer.correctAnswer")} />
    </label>
  );
}
