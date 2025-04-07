import { JSX } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { CreateQuestionDto, EQuestionType } from "../utils/questions.types";

type FillInTheBlank = Extract<
  CreateQuestionDto,
  { type: EQuestionType.FILL_IN_THE_BLANK } | { type: EQuestionType.ORDERING }
>;

export function AnswerFillInTheBlank(): JSX.Element {
  const { control, register } = useFormContext<FillInTheBlank, unknown>();

  const fieldName = "answer.correctOrder";

  const { append, fields } = useFieldArray({
    name: fieldName,
    control,
  });

  return (
    <>
      {fields.map((field, i) => (
        <div key={field.id}>
          <label>
            <span>Correct answers</span>
            <input {...register(`${fieldName}.${i}`)} />
          </label>
        </div>
      ))}

      <button type="button" onClick={() => append({ value: "" })}>
        Append
      </button>
    </>
  );
}
