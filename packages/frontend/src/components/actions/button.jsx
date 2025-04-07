import clsx from "clsx";

export function Button(props) {
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
