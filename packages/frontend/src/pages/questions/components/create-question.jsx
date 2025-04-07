import { FormProvider, useForm } from "react-hook-form";
import { Button, Input, LabelInput, Select } from "~/components";
import { usePostRemote } from "~/utils";
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
