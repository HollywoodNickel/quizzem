import { EQuestionType } from "./create-question-values";

export function resetAnswerField(selectedType, setValue) {
  switch (selectedType) {
    case EQuestionType.TRUE_FALSE:
      setValue("answer", {
        correctAnswer: false,
      });
      break;
    case EQuestionType.FILL_IN_THE_BLANK:
    case EQuestionType.ORDERING:
      setValue("answer", {
        correctOrder: [{ value: "" }],
      });
      break;
    case EQuestionType.ESTIMATE:
    case EQuestionType.NUMERIC:
      setValue("answer", {
        correctAnswer: 0,
      });
      break;
    case EQuestionType.IMAGE_QUESTION:
    case EQuestionType.MUSIC_QUESTION:
    case EQuestionType.VIDEO_QUESTION:
      setValue("answer", {
        file: "",
        correctAnswer: "",
      });
      break;
    default:
      setValue("answer", {
        choices: [{ text: "", correctAnswer: false }],
      });
  }
}
