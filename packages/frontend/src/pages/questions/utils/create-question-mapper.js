import { EQuestionType } from "./create-question-values";

export function createQuestionMapper(data) {
  let dataToSend;

  switch (data.type) {
    case EQuestionType.FILL_IN_THE_BLANK:
    case EQuestionType.ORDERING:
      dataToSend = {
        ...data,
        answer: {
          correctOrder: data.answer.correctOrder.map((item) => item.value),
        },
      };
      break;
    default:
      dataToSend = data;
      break;
  }

  return dataToSend;
}
