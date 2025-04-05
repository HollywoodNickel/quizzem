import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { http } from "../http";
import { UseMutationRemoteOptions } from "../remote.types";

export function usePostRemote<Req, Res>(
  target: string,
  options?: UseMutationRemoteOptions
): UseMutationResult<Res, unknown, Req> {
  const { params } = options ?? {};

  return useMutation<Res, unknown, Req>({
    mutationKey: [target, params],
    mutationFn: async (body): Promise<Res> => {
      return http.post<Res>(target, body, { params }).then((res) => res.data);
    },
  });
}
