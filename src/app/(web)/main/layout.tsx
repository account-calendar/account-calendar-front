import type { PropsWithChildren } from "react";
import Navigation from "../../../widgets/components/navigation";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default MainLayout;
