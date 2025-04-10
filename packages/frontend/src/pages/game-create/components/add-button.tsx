import { RiAddLine } from "@remixicon/react";
import { ButtonHTMLAttributes, DetailedHTMLProps, JSX } from "react";

const Divider = (): JSX.Element => <div className="h-px flex-1 bg-neutral" />;

type AddButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function AddButton(props: AddButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="w-full btn btn-ghost flex items-center justify-center gap-8"
      {...props}
    >
      <Divider />
      <div className="flex items-center justify-center aspect-square rounded-full w-fit">
        <RiAddLine size={24} />
      </div>
      <Divider />
    </button>
  );
}
