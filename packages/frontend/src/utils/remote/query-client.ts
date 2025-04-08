import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({ queryCache: new QueryCache() });

export const DEFAULT_STALE_TIME = 1000 * 60 * 5;
