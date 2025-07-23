"use client";

import { cn } from "@/shared/utils/style";
import type { ButtonHTMLAttributes } from "react";

type DayButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  day: Date;
  onDateClick: (date: Date) => void;
  income?: number;
  expense?: number;
};

const DayButton = ({
  day,
  onDateClick,
  className,
  disabled,
  income,
  expense,
  ...props
}: DayButtonProps) => {
  return (
    <button
      className={cn(
        "p-xs flex flex-col gap-y-xs group cursor-pointer transition-all rounded-lg overflow-hidden",
        "hover:bg-bg-secondary-hover",
        "active:bg-bg-secondary-pressed",
        "disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:active:bg-transparent"
      )}
      disabled={disabled}
      onClick={() => onDateClick(day)}
      {...props}
    >
      <span
        className={cn(
          "text-text-strong rounded-sm transition-all",
          disabled
            ? "text-text-disabled"
            : "text-text-strong group-hover:bg-bg-primary-hover group-active:bg-bg-primary-pressed"
        )}
      >
        {day.getDate()}
      </span>
      {!!income && (
        <span className="text-text-income typo-lb-md-normal text-wrap text-left w-full break-words whitespace-pre-wrap">{`+${income.toLocaleString()}`}</span>
      )}
      {!!expense && (
        <span className="text-text-expense typo-lb-md-normal text-wrap text-left w-full break-words whitespace-pre-wrap">{`-${expense.toLocaleString()}`}</span>
      )}
    </button>
  );
};

export default DayButton;
