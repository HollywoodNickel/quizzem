import { useFieldArray, useFormContext } from "react-hook-form";

export function AnswerOrdering() {
  const { register, control } = useFormContext();

  const fieldName = "answer.correctOrder";

  const { fields, append } = useFieldArray({ control, name: fieldName });

  return (
    <>
      {fields.map((field, i) => (
        <div key={field.id}>
          <input {...register(`${fieldName}.${i}.value`)} />
        </div>
      ))}
      <button type="button" onClick={() => append({ value: "" })}>
        Append
      </button>
    </>
  );
}
