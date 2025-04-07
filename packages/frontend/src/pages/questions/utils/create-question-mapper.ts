import {
  AnswerOrderingDto,
  CreateQuestionDto,
  EQuestionType,
} from "./questions.types";

export function createQuestionMapper(
  data: CreateQuestionDto
): CreateQuestionDto {
  let dataToSend: CreateQuestionDto;

  switch (data.type) {
    case EQuestionType.FILL_IN_THE_BLANK:
    case EQuestionType.ORDERING:
      dataToSend = {
        ...data,
        answer: {
          correctOrder: (
            data as unknown as AnswerOrderingDto
          ).answer.correctOrder.map((item) => item.value),
        },
      };
      break;
    default:
      dataToSend = data;
      break;
  }

  console.log("createQuestionMapper", dataToSend);
  return dataToSend;
}
