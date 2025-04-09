import { JSX, useState } from "react";
import { useFormContext } from "react-hook-form";
import { LabelInput, Range } from "~/components";

type StandardQuizRoundProps = {
  index: number;
};

export function StandardQuizRound(
  props: Readonly<StandardQuizRoundProps>
): JSX.Element {
  const { index } = props;

  const [rangeValue, setRangeValue] = useState(1);

  const { register } = useFormContext();

  return (
    <LabelInput label="Anzahl der Fragen">
      <Range
        min={1}
        max={10}
        step={1}
        value={rangeValue}
        {...register(`rounds.${index}.questionCount`, {
          valueAsNumber: true,
          onChange(event) {
            setRangeValue(Number(event.target.value));
          },
        })}
      />
    </LabelInput>
  );
}
