import { UseQueryOptions } from "@tanstack/react-query";

export type UseQueryRemoteOptions<Res> = Pick<
  UseQueryOptions<Res>,
  "enabled" | "staleTime"
> & {
  params?: URLSearchParams;
};

export type UseMutationRemoteOptions = {
  params?: URLSearchParams;
};
