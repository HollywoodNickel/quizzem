import clsx from "clsx";

export function IconButton(props) {
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
