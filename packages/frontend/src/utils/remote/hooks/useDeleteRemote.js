import { useMutation } from "@tanstack/react-query";
import { http } from "../http";

export function useDeleteRemote(target, options) {
  const { params } = options ?? {};

  return useMutation({
    mutationKey: [target, params],
    mutationFn: async (id) => {
      return http.delete(`${target}/${id}`, { params }).then((res) => res.data);
    },
  });
}
