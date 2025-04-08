import { JSX, PropsWithChildren } from "react";

type HeadlineProps = PropsWithChildren & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function Headline(props: Readonly<HeadlineProps>): JSX.Element {
  const { as = "h1", children } = props;

  const Component = as;

  return <Component className={headlineStyles[as]}>{children}</Component>;
}

const headlineStyles = {
  h1: "text-4xl font-bold leading-snug my-4",
  h2: "text-3xl font-bold leading-snug my-4",
  h3: "text-2xl font-bold leading-snug my-4",
  h4: "text-xl font-bold leading-snug my-4",
  h5: "text-lg font-bold leading-snug my-4",
  h6: "text-base font-bold leading-snug my-4",
};
