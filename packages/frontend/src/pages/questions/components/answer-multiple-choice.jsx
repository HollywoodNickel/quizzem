import { useFieldArray, useFormContext } from "react-hook-form";

export function AnswerMultipleChoice() {
  const { register, control } = useFormContext();

  const fieldName = "answer.choices";

  const { append, fields } = useFieldArray({
    name: fieldName,
    control,
  });

  return (
    <>
      {fields.map((field, i) => (
        <div key={field.id}>
          <label>
            <span>text</span>
            <input {...register(`${fieldName}.${i}.text`)} />
          </label>
          <label>
            <span>correct answer</span>
            <input
              type="checkbox"
              {...register(`${fieldName}.${i}.correctAnswer`)}
            />
          </label>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ text: "", correctAnswer: false })}
      >
        Append
      </button>
    </>
  );
}
