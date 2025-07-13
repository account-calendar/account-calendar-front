import Button from "@/shared/components/button";
import { cn } from "@/shared/utils/style";

type MiddleCategoryProps = {
  title: string;
  icon?: string;
};

const MiddleCategory = ({ title, icon }: MiddleCategoryProps) => {
  return (
    <div className="flex items-center gap-x-md pl-[72px]">
      <div
        className={cn(
          "flex-1 flex items-center gap-x-xs text-text-strong typo-sub-md-normal"
        )}
      >
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </div>
      <Button
        variant="icon"
        size="md"
        iconOption={{
          icon: "MORE",
          className: "size-2xl",
        }}
      />
    </div>
  );
};

export default MiddleCategory;
