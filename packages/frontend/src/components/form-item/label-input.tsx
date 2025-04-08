import { JSX, PropsWithChildren } from "react";

type LabelInputProps = PropsWithChildren & {
  label: string;
};

export function LabelInput(props: Readonly<LabelInputProps>): JSX.Element {
  const { label, children } = props;

  return (
    <label className="fieldset">
      <span className="fieldset-legend">{label}</span>
      {children}
    </label>
  );
}
