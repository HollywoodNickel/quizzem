import { usePostRemote } from "~/utils";

export function CreateCategory() {
  const { mutate } = usePostRemote("category");

  return <></>;
}
