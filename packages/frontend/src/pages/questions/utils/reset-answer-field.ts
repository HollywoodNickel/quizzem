import { UseFormSetValue } from "react-hook-form";
import { CreateQuestionDto, EQuestionType } from "./questions.types";

export function resetAnswerField(
  selectedType: EQuestionType,
  setValue: UseFormSetValue<CreateQuestionDto>
) {
  switch (selectedType) {
    case EQuestionType.TRUE_FALSE:
      setValue("answer", {
        correctAnswer: false,
      });
      break;
    case EQuestionType.FILL_IN_THE_BLANK:
    case EQuestionType.ORDERING:
      setValue("answer", {
        correctOrder: [],
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
    case EQuestionType.MULTIPLE_CHOICE:
    default:
      setValue("answer", {
        choices: [{ text: "", correctAnswer: false }],
      });
  }
}
