import { JSX } from "react";
import { AnswerFileQuestion } from "../components/answer-file-question";
import { AnswerMultipleChoice } from "../components/answer-multiple-choice";
import { AnswerNumeric } from "../components/answer-numeric";
import { AnswerOrdering } from "../components/answer-ordering";
import { AnswerTrueFalse } from "../components/answer-true-false";
import { EQuestionType } from "./questions.types";

type Props = {
  typeOfQuestion: EQuestionType;
};

export function RenderAnswersPerTypeOfQuestions(
  props: Readonly<Props>
): JSX.Element {
  const { typeOfQuestion } = props;

  const answerPerTypeOfQuestionMap: Record<EQuestionType, JSX.Element> = {
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

  return answerPerTypeOfQuestionMap[typeOfQuestion];
}
