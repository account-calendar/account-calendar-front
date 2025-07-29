"use client";

import DayButton from "@/shared/components/calender/_components/day-button";
import { getMonthDays } from "@/shared/utils/day";
import { cn } from "@/shared/utils/style";
import type { TransactionsDTO } from "@/services/types/transactions";
import { useMemo } from "react";

type CalendarProps = {
  className?: string;
  selectedMonth: string;
  transactions?: TransactionsDTO;
  onDateClick: (date: Date) => void;
};

const Calendar = ({
  className,
  selectedMonth,
  transactions,
  onDateClick,
}: CalendarProps) => {
  const days = useMemo(() => {
    return getMonthDays(selectedMonth);
  }, [selectedMonth]);

  return (
    <div
      className={cn(
        "grid grid-cols-7 grid-rows-[auto] auto-rows-fr text-center bg-gray-600 size-full typo-lb-sm-normal",
        className
      )}
    >
      {HEADER.map((item) => (
        <span
          key={item.value}
          className="py-xs text-white mb-sm border-b border-border-base-weak"
        >
          {item.label}
        </span>
      ))}
      {days.map((day, index) => (
        <DayButton
          key={index}
          day={new Date(day)}
          onDateClick={onDateClick}
          disabled={
            new Date(day).getMonth() !== new Date(selectedMonth).getMonth()
          }
          income={transactions?.dates[day]?.income ?? 0}
          expense={transactions?.dates[day]?.expense ?? 0}
        />
      ))}
    </div>
  );
};

export default Calendar;

const HEADER = [
  {
    label: "일",
    value: "sunday",
  },
  {
    label: "월",
    value: "monday",
  },
  {
    label: "화",
    value: "tuesday",
  },
  {
    label: "수",
    value: "wednesday",
  },
  {
    label: "목",
    value: "thursday",
  },
  {
    label: "금",
    value: "friday",
  },
  {
    label: "토",
    value: "saturday",
  },
];
