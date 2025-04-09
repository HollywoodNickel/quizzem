import { JSX } from "react";
import { StandardQuizRound } from "~/pages/game-create/components/game-rounds/standard-quiz-round";
import { EGameRoundType } from "~/pages/game-create/utils/game-create.types";

type RenderGameRoundProps = {
  gameRound: EGameRoundType;
  index: number;
};

export function RenderGameRound(
  props: Readonly<RenderGameRoundProps>
): JSX.Element {
  const { gameRound, index } = props;

  const gameRoundMap: Record<EGameRoundType, JSX.Element> = {
    [EGameRoundType.STANDARD_QUIZ_ROUND]: <StandardQuizRound index={index} />,
    [EGameRoundType.SPEED_QUIZ_ROUND]: <StandardQuizRound index={index} />,
    [EGameRoundType.ACTION_ROUND]: <></>,
    [EGameRoundType.MEDIA_ROUND]: <></>,
    [EGameRoundType.BONUS_ROUND]: <></>,
    [EGameRoundType.FINAL_ROUND]: <></>,
  };

  return gameRoundMap[gameRound];
}
