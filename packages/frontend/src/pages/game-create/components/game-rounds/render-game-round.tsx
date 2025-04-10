import { JSX } from "react";
import { ActionRound } from "~/pages/game-create/components/game-rounds/action-round";
import { BonusRound } from "~/pages/game-create/components/game-rounds/bonus-round";
import { MediaRound } from "~/pages/game-create/components/game-rounds/media-round";
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
    [EGameRoundType.ACTION_ROUND]: <ActionRound index={index} />,
    [EGameRoundType.MEDIA_ROUND]: <MediaRound index={index} />,
    [EGameRoundType.BONUS_ROUND]: <BonusRound index={index} />,
    [EGameRoundType.BUZZ_ROUND]: <StandardQuizRound index={index} />,
  };

  return gameRoundMap[gameRound];
}
