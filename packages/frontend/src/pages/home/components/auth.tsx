import { CreateUserDto } from "@quizzem/common";
import { JSX, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button, Headline, Input, LabelInput } from "~/components";
import { usePostRemote } from "~/utils";

export function Auth(): JSX.Element {
  const authMethod = useRef<"signin" | "signup" | null>(null);
  const { register, handleSubmit } = useForm<CreateUserDto>();
  const navigate = useNavigate();
  const { mutate: mutateSignIn } = usePostRemote("auth/sign-in");
  const { mutate: mutateSignUp } = usePostRemote("auth/sign-up");

  const onSubmit: SubmitHandler<CreateUserDto> = (data) => {
    const method = authMethod.current;

    if (method === "signin") {
      mutateSignIn(data, {
        onSuccess: () => {
          navigate("game");
        },
      });
    } else if (method === "signup") {
      mutateSignUp(data, {
        onSuccess: () => {
          navigate("game");
        },
      });
    } else {
      console.error("Auth method not set");
      return;
    }
  };

  return (
    <>
      <Headline as="h3">Login oder Account erstellen</Headline>
      <p>Um ein Spiel zu erstellen musst du angemeldet sein.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <LabelInput label="Username">
          <Input placeholder="John117" {...register("userName")} />
        </LabelInput>

        <LabelInput label="Passwort">
          <Input
            placeholder="Y0uSh411N0tP4$$"
            type="password"
            {...register("password")}
          />
        </LabelInput>

        <Button onClick={() => (authMethod.current = "signin")}>
          Anmelden
        </Button>
        <Button
          variant="secondary"
          onClick={() => (authMethod.current = "signup")}
        >
          Registrieren
        </Button>
      </form>
    </>
  );
}
