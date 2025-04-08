import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  JSX,
  PropsWithChildren,
} from "react";

type IconButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren & {
    variant?: "primary" | "secondary" | "accent" | "outline";
  };

export function IconButton(props: Readonly<IconButtonProps>): JSX.Element {
  const { children, variant = "outline", className, ...rest } = props;

  return (
    <button
      className={clsx(
        "btn btn-sm btn-circle",
        buttonStyles[variant],
        className
      )}
      {...rest}
    >
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
