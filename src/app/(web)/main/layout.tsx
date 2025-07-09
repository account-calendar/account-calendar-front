import type { PropsWithChildren } from "react";
import MainNavigation from "@/widgets/components/navigation/main";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <MainNavigation />
      {children}
    </>
  );
};

export default MainLayout;
