import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { JSX } from "react";
import { Link } from "react-router";
import { IconButton } from "~/components/actions";
import { useTheme } from "~/utils";

export function Header(): JSX.Element {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className="p-4 shadow-xl">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <span className="uppercase font-black">Quizzem</span>
        </Link>

        <IconButton onClick={toggleTheme}>
          {theme === "cupcake" ? <RiMoonLine /> : <RiSunLine />}
        </IconButton>
      </div>
    </header>
  );
}
