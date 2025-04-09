import { JSX, useRef, useState } from "react";
import { Headline, Layout } from "~/components";
import { AddButton } from "~/pages/game-create/components/add-button";
import { GameRoundContainer } from "~/pages/game-create/components/game-round-container";

export function GameCreatePage(): JSX.Element {
  const [rounds, setRounds] = useState<number>(1);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Layout>
      <Headline>Spiel erstellen</Headline>

      <div className="flex flex-col gap-4">
        {Array.from({ length: rounds }, (_, i) => (
          <GameRoundContainer key={i} index={i} />
        ))}

        <AddButton
          ref={buttonRef}
          onClick={() => {
            setRounds((prev) => prev + 1);
            setTimeout(() => {
              buttonRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }, 0);
          }}
        />
      </div>
    </Layout>
  );
}
