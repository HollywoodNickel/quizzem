import { useQuery } from "@tanstack/react-query";
import { http } from "../http";

export function useGetRemote(target, options) {
  const { params, enabled, staleTime } = options ?? {};

  return useQuery({
    queryKey: [target, { params }],
    queryFn: async () => {
      return http.get(target, { params }).then((res) => res.data);
    },
    enabled,
    staleTime,
  });
}
