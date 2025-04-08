import { EQuestionType, QuestionDto } from "@quizzem/common";
import { IconCheck, IconX } from "@tabler/icons-react";

type RenderAnswerProps = {
  type: EQuestionType;
  answer: QuestionDto["answer"];
};

export function RenderAnswer(props: Readonly<RenderAnswerProps>): JSX.Element {
  const { answer, type } = props;

  switch (type) {
    case EQuestionType.FILL_IN_THE_BLANK:
    case EQuestionType.ORDERING:
      return <div>{answer.correctOrder.join(", ")}</div>;
    case EQuestionType.MULTIPLE_CHOICE:
    default: {
      return (
        <>
          {answer.choices.map((choice, i) => (
            <div key={choice.text}>
              {i + 1}: {choice.text}{" "}
              {choice.correctAnswer ? <IconCheck /> : <IconX color="red" />}
            </div>
          ))}
        </>
      );
    }
  }
}
