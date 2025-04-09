import clsx from "clsx";
import { JSX, useRef, useState } from "react";
import { Headline } from "~/components";
import { AddButton } from "~/pages/game-create/components/add-button";

type GameRoundContainerProps = {
  index: number;
};

export function GameRoundContainer(
  props: Readonly<GameRoundContainerProps>
): JSX.Element {
  const { index } = props;

  const [tasks, setTasks] = useState<number>(1);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div
      className={clsx(
        "rounded-xl shadow-xl w-full bg-base-200 border",
        getAlternatingBgClass(index)
      )}
    >
      <div className="bg-base-300 rounded-t-xl w-full p-2">
        <Headline as="h4" defaultMargin={false}>
          Round {index + 1}
        </Headline>
      </div>

      <div className="p-2">
        {Array.from({ length: tasks }, (_, i) => (
          <div key={i}>Task number {i + 1}</div>
        ))}

        <AddButton
          ref={buttonRef}
          onClick={() => {
            setTasks((prev) => prev + 1);
            setTimeout(() => {
              buttonRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }, 0);
          }}
        />
      </div>
    </div>
  );
}

function getAlternatingBgClass(index: number): string {
  const backgroundClasses = [
    "border-primary",
    "border-secondary",
    "border-accent",
  ];

  return backgroundClasses[index % backgroundClasses.length];
}
