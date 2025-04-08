import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient, Router } from "~/utils";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
