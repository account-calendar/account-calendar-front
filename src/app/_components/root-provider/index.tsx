"use client";

import ReactQueryProvider from "@/app/_components/root-provider/_components/react-query";

const RootProvider = ({ children }: React.PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default RootProvider;
