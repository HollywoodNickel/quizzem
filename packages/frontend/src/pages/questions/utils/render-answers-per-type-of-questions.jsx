import { AnswerFileQuestion } from "../components/answer-file-question";
import { AnswerMultipleChoice } from "../components/answer-multiple-choice";
import { AnswerNumeric } from "../components/answer-numeric";
import { AnswerOrdering } from "../components/answer-ordering";
import { AnswerTrueFalse } from "../components/answer-true-false";
import { EQuestionType } from "./create-question-values";

const answerPerTypeOfQuestionMap = {
  [EQuestionType.MULTIPLE_CHOICE]: <AnswerMultipleChoice />,
  [EQuestionType.TRUE_FALSE]: <AnswerTrueFalse />,
  [EQuestionType.FILL_IN_THE_BLANK]: <AnswerOrdering />,
  [EQuestionType.ORDERING]: <AnswerOrdering />,
  [EQuestionType.ESTIMATE]: <AnswerNumeric label="Estimate" />,
  [EQuestionType.NUMERIC]: <AnswerNumeric label="Numeric" />,
  [EQuestionType.IMAGE_QUESTION]: <AnswerFileQuestion />,
  [EQuestionType.MUSIC_QUESTION]: <AnswerFileQuestion />,
  [EQuestionType.VIDEO_QUESTION]: <AnswerFileQuestion />,
};

export function RenderAnswersPerTypeOfQuestions(props) {
  const { typeOfQuestion } = props;

  return answerPerTypeOfQuestionMap[typeOfQuestion];
}
