"use client";

import ReactQueryProvider from "@/app/_components/root-provider/_components/react-query";
import { OverlayProvider } from "overlay-kit";

const RootProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </ReactQueryProvider>
  );
};

export default RootProvider;
