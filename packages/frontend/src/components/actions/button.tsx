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
    variant?: "primary" | "secondary" | "accent" | "neutral";
  };

export function Button(props: Readonly<ButtonProps>): JSX.Element {
  const { children, variant = "primary", className, ...rest } = props;

  return (
    <button
      className={clsx("btn btn-outline", buttonStyles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

const buttonStyles = {
  neutral: "",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
};
