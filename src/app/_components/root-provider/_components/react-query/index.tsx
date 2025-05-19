"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const ReactQueryProvider = ({ children }: React.PropsWithChildren) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: 1,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
