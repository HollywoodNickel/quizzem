import { JSX } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { usePostRemote } from "../../../utils/remote/hooks/usePostRemote";
import { CreateQuestionDto, EQuestionType } from "../utils/questions.types";
import { RenderAnswersPerTypeOfQuestions } from "../utils/render-answers-per-type-of-questions";
import { resetAnswerField } from "../utils/reset-answer-field";

export default function CreateQuestion(): JSX.Element {
  const { mutate } = usePostRemote<CreateQuestionDto, void>("question");

  const form = useForm<CreateQuestionDto>({
    defaultValues: {
      question: "",
      type: EQuestionType.MULTIPLE_CHOICE,
      answer: { choices: [{ text: "", correctAnswer: false }] },
      hint: null,
      timer: null,
    },
  });

  const { register, handleSubmit, watch, setValue } = form;

  const typeOfQuestion = watch("type");

  const onSubmit: SubmitHandler<CreateQuestionDto> = (data) => {
    console.log("data", data);
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
          <input type={"number"} {...register("timer")} />
        </label>

        <h4>Answer</h4>
        <select
          {...register("type", {
            onChange: (e) => {
              const selectedType = e.target.value as EQuestionType;
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
