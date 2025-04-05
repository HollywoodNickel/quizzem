import { useGetRemote } from "../utils/remote/hooks/useGetRemote";

export function QuestionsPage() {
  const { data } = useGetRemote("question");

  console.log(data);

  return <div>questions page</div>;
}
