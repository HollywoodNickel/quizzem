import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/remote/query-client";
import { Router } from "./utils/remote/router";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
