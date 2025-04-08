import {
  DetailedHTMLProps,
  JSX,
  PropsWithChildren,
  SelectHTMLAttributes,
} from "react";

type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  PropsWithChildren;

export function Select(props: Readonly<SelectProps>): JSX.Element {
  const { children, ...rest } = props;
  return (
    <select className="select w-full" {...rest}>
      {children}
    </select>
  );
}
