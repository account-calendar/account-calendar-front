import { APP_ROUTES } from "@/services/constants/app-routes";
import Button from "@/shared/components/button";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <div className="py-sm pl-xl pr-sm flex items-center justify-between text-white">
      <Link href={APP_ROUTES.MAIN}>logo</Link>
      <div className="flex gap-sm">
        <Link href={APP_ROUTES.CATEGORY}>
          <Button
            variant="icon"
            size="md"
            iconOption={{ icon: "FOLDER", className: "size-2xl" }}
            className="text-white px-sm"
          />
        </Link>
        <Button
          variant="icon"
          size="md"
          iconOption={{ icon: "CHART", className: "size-2xl" }}
          className="text-white px-sm"
        />
        <Link href={APP_ROUTES.MY}>
          <Button
            variant="icon"
            size="md"
            iconOption={{ icon: "USER", className: "size-2xl" }}
            className="text-white px-sm"
          />
        </Link>
      </div>
    </div>
  );
};

export default MainNavigation;
