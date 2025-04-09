import { JSX, useState } from "react";
import { LabelInput, Range } from "~/components";

export function StandardQuizRound(): JSX.Element {
  const [rangeValue, setRangeValue] = useState(10);

  return (
    <LabelInput label="Anzahl der Fragen">
      <Range
        min={10}
        max={100}
        step={10}
        value={rangeValue}
        onChange={(e) => setRangeValue(Number(e.target.value))}
      />
    </LabelInput>
  );
}
