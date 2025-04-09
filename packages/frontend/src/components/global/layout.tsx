import { JSX, PropsWithChildren } from "react";

export function Layout(props: Readonly<PropsWithChildren>): JSX.Element {
  const { children } = props;

  return <main className="px-4 pb-4">{children}</main>;
}
