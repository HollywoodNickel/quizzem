import { JSX } from "react";
import { Outlet } from "react-router";
import { Header } from "~/components/global/header";

export function BasePage(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
