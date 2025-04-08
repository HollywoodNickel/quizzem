import { JSX } from "react";
import { Link } from "react-router";

export function Header(): JSX.Element {
  return (
    <header className="p-4 shadow-xl">
      <Link to={"/"}>
        <span className="uppercase font-black">Quizzem</span>
      </Link>
    </header>
  );
}
