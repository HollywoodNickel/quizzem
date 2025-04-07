import { useMutation } from "@tanstack/react-query";
import { http } from "../http";

export function usePostRemote(target, options) {
  const { params } = options ?? {};

  return useMutation({
    mutationKey: [target, params],
    mutationFn: async (body) => {
      return http.post(target, body, { params }).then((res) => res.data);
    },
  });
}
