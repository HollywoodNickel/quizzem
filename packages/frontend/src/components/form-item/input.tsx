import { DetailedHTMLProps, InputHTMLAttributes, JSX } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input(props: Readonly<InputProps>): JSX.Element {
  return <input className="input w-full" {...props} />;
}
