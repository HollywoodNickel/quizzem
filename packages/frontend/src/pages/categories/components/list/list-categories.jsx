import { useGetRemote } from "~/utils/remote/hooks/useGetRemote";

export function ListCategories() {
  const { data, isLoading } = useGetRemote("category");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="list">
      {data.map((category, i) => (
        <li className="list-row" key={category.id}>
          <span className="font-thin">{String(i + 1).padStart(2, "0")}</span>
          <span>{category.category}</span>
        </li>
      ))}
    </ul>
  );
}
