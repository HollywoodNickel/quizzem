import { CategoryDto, PageableDto } from "@quizzem/common";
import { useGetRemote } from "~/utils/remote/hooks/useGetRemote";

export function ListCategories() {
  const { data, isLoading } =
    useGetRemote<PageableDto<CategoryDto>>("category");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <ul className="list">
      {data.data.map((category, i) => (
        <li className="list-row" key={category.id}>
          <span className="font-thin">{String(i + 1).padStart(2, "0")}</span>
          <span>{category.category}</span>
        </li>
      ))}
    </ul>
  );
}
