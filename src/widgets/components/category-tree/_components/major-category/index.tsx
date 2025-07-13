"use client";

import Button from "@/shared/components/button";
import Icon from "@/shared/components/Icon";
import { cn } from "@/shared/utils/style";
import { useState, type ReactNode } from "react";

type MajorCategoryProps = {
  title: string;
  icon?: string;
  disabled?: boolean;
  children?: ReactNode;
};

const MajorCategory = ({
  title,
  icon,
  disabled,
  children,
}: MajorCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn(
        "grid transition-all duration-300 overflow-hidden",
        isOpen ? "grid-rows-[48px_1fr]" : "grid-rows-[48px_0fr] overflow-hidden"
      )}
    >
      <div className="flex items-center gap-x-md py-xs">
        <button
          className={cn(
            "flex items-center group flex-1 cursor-pointer",
            "disabled:cursor-not-allowed"
          )}
          disabled={disabled}
          onClick={() => children && setIsOpen(!isOpen)}
        >
          <div className="size-[40px] flex items-center justify-center">
            <Icon
              icon="CHEVRON_DOWN"
              className={cn(
                "size-2xl text-text-strong transition-all duration-300",
                {
                  "text-text-disabled": !children,
                },
                isOpen && "rotate-180"
              )}
            />
          </div>
          <div className="flex items-center gap-x-sm">
            <Icon icon="FOLDER" className="size-xl text-yellow-200" />
            <div
              className={cn(
                "flex items-center gap-x-xs p-xs text-text-strong typo-sub-lg-normal rounded-sm transition-all",
                {
                  "group-hover:bg-bg-secondary-hover group-active:bg-bg-secondary-pressed":
                    !disabled,
                }
              )}
            >
              {icon && <span className="text-2xl">{icon}</span>}
              <span>{title}</span>
            </div>
          </div>
        </button>
        <Button
          variant="icon"
          size="md"
          iconOption={{
            icon: "MORE",
            className: "size-2xl",
          }}
        />
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default MajorCategory;
