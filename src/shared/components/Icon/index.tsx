import ICONS, { type IconList } from "@/shared/components/Icon/constants";
import { cn } from "@/shared/utils/style";

interface IconProps {
  icon: IconList;
  className?: string;
}

const Icon = ({ icon, className }: IconProps) => {
  return (
    <svg
      className={cn("fill-current", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...ICONS[icon].svgOptions}
    >
      {ICONS[icon].icon}
    </svg>
  );
};

export type { IconList, IconProps };

export default Icon;
