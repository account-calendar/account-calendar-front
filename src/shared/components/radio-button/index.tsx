"use client";

import { cn } from "@/shared/utils/style";
import type { ButtonHTMLAttributes } from "react";

type RadioButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  children?: React.ReactNode;
};

const RadioButton = ({
  children,
  className,
  selected,
  ...props
}: RadioButtonProps) => {
  return (
    <button
      className={cn(
        "h-[44px] px-lg rounded-lg text-text-strong typo-btn-lg-strong transition-all cursor-pointer",
        selected
          ? "bg-bg-primary hover:bg-bg-primary-hover"
          : "bg-bg-tertiary hover:bg-bg-tertiary-hover",
        "active:bg-bg-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default RadioButton;
