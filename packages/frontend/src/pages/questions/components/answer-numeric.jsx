import { useFormContext } from "react-hook-form";

export function AnswerNumeric(props) {
  const { label } = props;

  const { register } = useFormContext();

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
