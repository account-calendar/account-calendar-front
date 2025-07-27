import MainNavigation from "@/widgets/components/navigation/main";
import { type PropsWithChildren } from "react";

const WebLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto max-w-[430px] w-full h-full flex flex-col">
      <MainNavigation />
      {children}
    </div>
  );
};

export default WebLayout;
