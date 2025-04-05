import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { http } from "../http";
import { UseQueryRemoteOptions } from "../remote.types";

export function useGetRemote<Res>(
  target: string,
  options?: UseQueryRemoteOptions<Res>
): UseQueryResult<Res> {
  const { params, enabled, staleTime } = options ?? {};

  return useQuery<Res>({
    queryKey: [target, { params }],
    queryFn: async (): Promise<Res> => {
      return http.get<Res>(target, { params }).then((res) => res.data);
    },
    enabled,
    staleTime,
  });
}
