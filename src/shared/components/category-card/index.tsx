import { cn } from "@/shared/utils/style";
import type { ButtonHTMLAttributes } from "react";

type CategoryCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  title?: string;
};

const CategoryCard = ({
  className,
  title,
  icon,
  ...props
}: CategoryCardProps) => {
  return (
    <button
      className={cn(
        "group w-full aspect-square bg-bg-tertiary rounded-3xl px-xl pt-5xl flex flex-col items-center gap-y-sm cursor-pointer transition-all",
        "hover:bg-bg-tertiary-hover",
        "active:bg-bg-tertiary-pressed",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "size-[80px] bg-bg-secondary flex items-center justify-center rounded-2xl transition-all",
          "group-hover:bg-bg-secondary-hover",
          "group-active:bg-bg-secondary-pressed"
        )}
      >
        {icon}
      </div>
      <div className="text-white typo-h-xs-strong">{title}</div>
    </button>
  );
};

export default CategoryCard;
