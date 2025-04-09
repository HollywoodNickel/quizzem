import { JSX } from "react";
import { StandardQuizRound } from "~/pages/game-create/components/game-rounds/standard-quiz-round";
import { EGameRoundType } from "~/pages/game-create/utils/game-create.types";

const gameRoundMap: Record<EGameRoundType, JSX.Element> = {
  [EGameRoundType.STANDARD_QUIZ_ROUND]: <StandardQuizRound />,
  [EGameRoundType.SPEED_QUIZ_ROUND]: <StandardQuizRound />,
  [EGameRoundType.ACTION_ROUND]: <></>,
  [EGameRoundType.MEDIA_ROUND]: <></>,
  [EGameRoundType.BONUS_ROUND]: <></>,
  [EGameRoundType.FINAL_ROUND]: <></>,
};

type RenderGameRoundProps = {
  gameRound: EGameRoundType;
};

export function RenderGameRound(
  props: Readonly<RenderGameRoundProps>
): JSX.Element {
  const { gameRound } = props;
  return gameRoundMap[gameRound];
}
