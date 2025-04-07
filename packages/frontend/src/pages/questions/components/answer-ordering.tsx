import { JSX } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { AnswerOrderingDto } from "../utils/questions.types";

export function AnswerOrdering(): JSX.Element {
  const { register, control } = useFormContext<AnswerOrderingDto>();

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
