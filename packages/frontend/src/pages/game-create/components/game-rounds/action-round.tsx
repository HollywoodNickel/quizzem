import { RiCloseLine } from "@remixicon/react";
import { JSX, useRef } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IconButton, LabelInput, Select } from "~/components";
import { AddButton } from "~/pages/game-create/components/add-button";
import { defaultAction } from "~/pages/game-create/utils/form-values";

type ActionRoundProps = {
  index: number;
};

export function ActionRound(props: Readonly<ActionRoundProps>): JSX.Element {
  const { index } = props;

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { control, register } = useFormContext();
  const { append, fields, remove } = useFieldArray({
    name: `rounds.${index}.actions`,
    control,
  });

  function handleAddRound() {
    console.log("Add action round");

    append(defaultAction);
    setTimeout(() => {
      buttonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
  }

  return (
    <div>
      <LabelInput label="Wähle die Aktionen aus">
        {fields.map((field, i) => (
          <div key={field.id} className="flex flex-row items-center gap-2">
            <Select
              className="bg-base-200"
              {...register(`rounds.${index}.actions.${i}`)}
            >
              <option>Hello</option>
              <option>Mister</option>
            </Select>

            <IconButton
              disabled={fields.length === 1}
              variant="accent"
              className="btn-ghost"
              onClick={() => {
                remove(i);
              }}
            >
              <RiCloseLine />
            </IconButton>
          </div>
        ))}
      </LabelInput>
      <AddButton ref={buttonRef} onClick={handleAddRound} className="mt-4" />
    </div>
  );
}
