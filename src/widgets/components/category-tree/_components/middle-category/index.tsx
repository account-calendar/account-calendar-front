"use client";

import Dropdown from "@/shared/components/dropdown";
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
      <Dropdown
        items={[
          { label: "수정", onClick: () => {} },
          { label: "삭제", onClick: () => {} },
        ]}
        buttonOption={{
          size: "md",
          className: "px-sm",
          iconOption: {
            icon: "MORE",
            className: "size-2xl",
          },
        }}
      />
    </div>
  );
};

export default MiddleCategory;
