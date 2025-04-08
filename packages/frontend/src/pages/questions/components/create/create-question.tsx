import { CreateQuestionDto, EQuestionType } from "@quizzem/common";
import { JSX } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Button, Input, LabelInput, Select } from "~/components";
import { createQuestionMapper } from "~/pages/questions/utils/create-question-mapper";
import { RenderAnswersPerTypeOfQuestions } from "~/pages/questions/utils/render-answers-per-type-of-questions";
import { resetAnswerField } from "~/pages/questions/utils/reset-answer-field";
import { queryClient, usePostRemote } from "~/utils";

export function CreateQuestion(): JSX.Element {
  const { mutate } = usePostRemote("question");

  const form = useForm<CreateQuestionDto>({
    defaultValues: {
      question: "",
      type: EQuestionType.MULTIPLE_CHOICE,
      hint: null,
      timer: null,
      answer: { choices: [{ text: "", correctAnswer: false }] },
    },
  });

  const { register, handleSubmit, watch, setValue } = form;

  const typeOfQuestion = watch("type");

  const onSubmit: SubmitHandler<CreateQuestionDto> = (data) => {
    const createQuestionDto = createQuestionMapper(data);
    mutate(createQuestionDto, {
      onSuccess: () => {
        form.reset();
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["questions"] });
      },
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabelInput label={"Question"}>
          <Input {...register("question")} />
        </LabelInput>
        <LabelInput label={"Possible hint"}>
          <Input {...register("hint")} />
        </LabelInput>
        <LabelInput label={"Timer"}>
          <Input
            type={"number"}
            {...register("timer", { valueAsNumber: true })}
          />
        </LabelInput>

        <LabelInput label={"Art der Frage"}>
          <Select
            {...register("type", {
              onChange: (e) => {
                const selectedType = e.target.value;
                setValue("type", selectedType);
                resetAnswerField(selectedType, setValue);
              },
            })}
          >
            {Object.values(EQuestionType).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </LabelInput>

        <RenderAnswersPerTypeOfQuestions typeOfQuestion={typeOfQuestion} />

        <Button className={"w-full mt-8"} type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}
