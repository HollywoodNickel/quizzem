import { JSX, PropsWithChildren } from "react";

export function Layout(props: Readonly<PropsWithChildren>): JSX.Element {
  const { children } = props;

  return <main className="p-4">{children}</main>;
}
