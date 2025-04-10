import { EGameRoundType } from "~/pages/game-create/utils/game-create.types";

export const defaultRound = {
  type: EGameRoundType.STANDARD_QUIZ_ROUND,
  questionCount: 1,
};

export const selectTypeOfRoundOptions: {
  type: EGameRoundType;
  label: string;
}[] = [
  {
    type: EGameRoundType.STANDARD_QUIZ_ROUND,
    label: "Standardrunde",
  },
  {
    type: EGameRoundType.SPEED_QUIZ_ROUND,
    label: "Schnellraterunde",
  },
  {
    type: EGameRoundType.BUZZ_ROUND,
    label: "Buzzerrunde",
  },
  {
    type: EGameRoundType.ACTION_ROUND,
    label: "Aktionsrunde",
  },
  {
    type: EGameRoundType.MEDIA_ROUND,
    label: "Medienrunde",
  },
  {
    type: EGameRoundType.BONUS_ROUND,
    label: "Bonusrunde",
  },
];
