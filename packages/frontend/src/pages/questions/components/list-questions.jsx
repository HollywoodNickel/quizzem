import { IconCheck, IconX } from "@tabler/icons-react";
import { useGetRemote } from "../../../utils/remote/hooks/useGetRemote";
import { EQuestionType } from "../utils/create-question-values";

export function ListQuestions() {
  const { data, isLoading } = useGetRemote("question");

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <div className="flex flex-col gap-4">
      {data.map((data) => (
        <ListQuestionsItem key={data.id} {...data} />
      ))}
    </div>
  );
}

function ListQuestionsItem(props) {
  const { answer, hint, question, timer, type } = props;

  return (
    <div className="p-4 bg-base-200 rounded-2xl shadow-xl">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Type: {type}</span>
          {timer && <span>timer {timer}</span>}
        </div>

        <div>
          <h4>Question</h4>
          <p>{question}</p>
        </div>
        {hint && (
          <div>
            <h4>Hint</h4>
            <p>{hint}</p>
          </div>
        )}
        <div>
          <h4>Answers</h4>
          {renderAnswer(answer, type)}
        </div>
      </div>
    </div>
  );
}

function renderAnswer(answer, type) {
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
