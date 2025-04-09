import { RiCloseLine, RiDraggable } from "@remixicon/react";
import clsx from "clsx";
import { JSX } from "react";
import { Headline, IconButton, LabelInput, Select } from "~/components";
import { RenderGameRound } from "~/pages/game-create/components/game-rounds/render-game-round";
import { EGameRoundType } from "~/pages/game-create/utils/game-create.types";

type GameRoundContainerProps = {
  index: number;
};

export function GameRoundContainer(
  props: Readonly<GameRoundContainerProps>
): JSX.Element {
  const { index } = props;

  return (
    <div
      className={clsx(
        "rounded-xl shadow-xl w-full bg-base-200 border",
        getAlternatingBgClass(index)
      )}
    >
      {/* card title */}
      <CardTitle index={index} />

      <div className="p-4 flex flex-col gap-4">
        <LabelInput label="Art der Runde">
          <Select className="bg-base-200">
            {Object.values(EGameRoundType).map((value) => (
              <option key={value}>{value}</option>
            ))}
          </Select>
        </LabelInput>

        <RenderGameRound gameRound={EGameRoundType.STANDARD_QUIZ_ROUND} />
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

type CardTitleProps = {
  index: number;
};

function CardTitle(props: Readonly<CardTitleProps>): JSX.Element {
  const { index } = props;

  return (
    <div className="bg-base-300 rounded-t-xl w-full p-4 flex items-center justify-between">
      <Headline as="h4" defaultMargin={false}>
        Runde {index + 1}
      </Headline>

      <div className="flex items-center gap-2">
        <IconButton
          variant="accent"
          className="btn-ghost"
          onClick={() => {
            console.log("Delete round", index);
          }}
        >
          <RiCloseLine />
        </IconButton>
        <RiDraggable className="hover:cursor-pointer" />
      </div>
    </div>
  );
}
