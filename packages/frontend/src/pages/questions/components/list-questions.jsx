import { useGetRemote } from "../../../utils/remote/hooks/useGetRemote";

export function ListQuestions() {
  const { data, isLoading } = useGetRemote("question");

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <div>
      {data.map((data, i) => (
        <div key={data.id}>
          {i + 1} {data.question}
        </div>
      ))}
    </div>
  );
}
