"use client";

import ReactQueryProvider from "@/app/_components/root-provider/_components/react-query";
import { OverlayProvider } from "overlay-kit";
import { Toaster } from "sonner";

const RootProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <OverlayProvider>
        {children}
        <Toaster />
      </OverlayProvider>
    </ReactQueryProvider>
  );
};

export default RootProvider;
