import clsx from "clsx";
import { JSX } from "react";
import { UseFieldArrayRemove, useFormContext } from "react-hook-form";
import { LabelInput, Select } from "~/components";
import { CardTitle } from "~/pages/game-create/components/card-title";
import { RenderGameRound } from "~/pages/game-create/components/game-rounds/render-game-round";
import { EGameRoundType } from "~/pages/game-create/utils/game-create.types";

type GameRoundContainerProps = {
  index: number;
  remove: UseFieldArrayRemove;
  fields: any[];
};

export function GameRoundContainer(
  props: Readonly<GameRoundContainerProps>
): JSX.Element {
  const { index, remove, fields } = props;

  const { register } = useFormContext();

  return (
    <div
      className={clsx(
        "rounded-xl shadow-xl w-full bg-base-200 border",
        getAlternatingBgClass(index)
      )}
    >
      <CardTitle
        disableRemove={fields.length === 1}
        index={index}
        remove={remove}
      />

      <div className="p-4 flex flex-col gap-4">
        <LabelInput label="Art der Runde">
          <Select className="bg-base-200" {...register(`rounds.${index}.type`)}>
            {Object.values(EGameRoundType).map((value) => (
              <option key={value}>{value}</option>
            ))}
          </Select>
        </LabelInput>

        <RenderGameRound
          index={index}
          gameRound={EGameRoundType.STANDARD_QUIZ_ROUND}
        />
      </div>
    </div>
  );
}

function getAlternatingBgClass(index: number): string {
  const backgroundClasses = [
    "border-primary",
    "border-secondary",
    "border-accent",
  ];

  return backgroundClasses[index % backgroundClasses.length];
}
