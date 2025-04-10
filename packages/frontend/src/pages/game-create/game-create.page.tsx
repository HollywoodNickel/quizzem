import clsx from "clsx";
import { JSX, useRef } from "react";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Button, Headline, Layout } from "~/components";
import { AddButton } from "~/pages/game-create/components/add-button";
import { GameRoundContainer } from "~/pages/game-create/components/game-round-container";
import { defaultRound } from "~/pages/game-create/utils/form-values";
import { useMediaQuery } from "~/utils/styling/hooks/useMediaQuery";

export function GameCreatePage(): JSX.Element {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const isSmall = useMediaQuery("(max-width: 33.75rem)");
  console.log(isSmall);

  const form = useForm({
    defaultValues: {
      rounds: [defaultRound],
    },
  });

  const { control, handleSubmit } = form;
  const { append, remove, fields } = useFieldArray({
    name: "rounds",
    control,
  });

  const onSubmit: SubmitHandler<{}> = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Headline>Spiel erstellen</Headline>

          <Button className="mb-4">Spiel erstellen</Button>

          <div
            className={clsx(
              "flex",
              isSmall ? "flex-col gap-4" : "flex-row gap-8 flex-wrap"
            )}
          >
            {fields.map((field, i) => (
              <GameRoundContainer
                key={field.id}
                index={i}
                fields={fields}
                remove={remove}
              />
            ))}

            <AddButton
              ref={buttonRef}
              onClick={() => {
                append(defaultRound);
                setTimeout(() => {
                  buttonRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }, 0);
              }}
            />
          </div>
        </form>
      </FormProvider>
    </Layout>
  );
}
