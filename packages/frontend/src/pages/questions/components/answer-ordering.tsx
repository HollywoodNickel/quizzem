import { JSX } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { CreateQuestionDto, EQuestionType } from "../utils/questions.types";

type FillInTheBlank = Extract<
  CreateQuestionDto,
  { type: EQuestionType.FILL_IN_THE_BLANK | EQuestionType.ORDERING }
>;
export function AnswerOrdering(): JSX.Element {
  const { register, control } = useFormContext<FillInTheBlank>();

  const fieldName = "answer.correctOrder";

  const { fields, append } = useFieldArray({ control, name: fieldName });

  return (
    <>
      {fields.map((field, i) => (
        <div key={field.id}>
          <input {...register(`${fieldName}.${i}`)} />
        </div>
      ))}
      <button type="button" onClick={() => append({ value: "" })}>
        Append
      </button>
    </>
  );
}
