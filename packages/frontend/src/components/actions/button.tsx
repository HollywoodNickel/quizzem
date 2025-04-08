import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  JSX,
  PropsWithChildren,
} from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren & {
    variant?: "primary" | "secondary" | "accent" | "outline";
  };

export function Button(props: Readonly<ButtonProps>): JSX.Element {
  const { children, variant = "primary", className, ...rest } = props;

  return (
    <button className={clsx("btn", buttonStyles[variant], className)} {...rest}>
      {children}
    </button>
  );
}

const buttonStyles = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  outline: "btn-outline",
};
