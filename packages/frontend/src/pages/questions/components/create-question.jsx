import { FormProvider, useForm } from "react-hook-form";
import { usePostRemote } from "../../../utils/remote/hooks/usePostRemote";
import { createQuestionMapper } from "../utils/create-question-mapper";
import {
  createQuestionDefaultValues,
  EQuestionType,
} from "../utils/create-question-values";
import { RenderAnswersPerTypeOfQuestions } from "../utils/render-answers-per-type-of-questions";
import { resetAnswerField } from "../utils/reset-answer-field";

export function CreateQuestion() {
  const { mutate } = usePostRemote("question");

  const form = useForm({
    defaultValues: createQuestionDefaultValues,
  });

  const { register, handleSubmit, watch, setValue } = form;

  const typeOfQuestion = watch("type");

  const onSubmit = (data) => {
    const createQuestionDto = createQuestionMapper(data);
    mutate(createQuestionDto, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Question</span>
          <input {...register("question")} />
        </label>
        <label>
          <span>Possible hint</span>
          <input {...register("hint")} />
        </label>
        <label>
          <span>Timer</span>
          <input
            type={"number"}
            {...register("timer", { valueAsNumber: true })}
          />
        </label>

        <h4>Answer</h4>
        <select
          {...register("type", {
            onChange: (e) => {
              const selectedType = e.target.value;
              setValue("type", selectedType);
              resetAnswerField(selectedType, setValue);
            },
          })}
        >
          {Object.values(EQuestionType).map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        <RenderAnswersPerTypeOfQuestions typeOfQuestion={typeOfQuestion} />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
