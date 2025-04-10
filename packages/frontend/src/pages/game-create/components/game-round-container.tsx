import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { JSX } from "react";
import { UseFieldArrayRemove, useFormContext, useWatch } from "react-hook-form";
import { LabelInput, Select } from "~/components";
import { CardTitle } from "~/pages/game-create/components/card-title";
import { RenderGameRound } from "~/pages/game-create/components/game-rounds/render-game-round";
import { selectTypeOfRoundOptions } from "~/pages/game-create/utils/form-values";

type GameRoundContainerProps = {
  index: number;
  remove: UseFieldArrayRemove;
  fields: any[];
  id: string;
  overlay?: boolean;
};

export function GameRoundContainer(
  props: Readonly<GameRoundContainerProps>
): JSX.Element {
  const { index, remove, fields, id, overlay = false } = props;

  const { register, control } = useFormContext();
  const gameRoundType = useWatch({
    control,
    name: `rounds.${index}.type`,
  });

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={clsx(
        overlay && "opacity-50",
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
            {selectTypeOfRoundOptions.map((option) => (
              <option key={option.type} value={option.type}>
                {option.label}
              </option>
            ))}
          </Select>
        </LabelInput>

        <RenderGameRound index={index} gameRound={gameRoundType} />
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
