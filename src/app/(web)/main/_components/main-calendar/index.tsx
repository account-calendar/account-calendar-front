import Calendar from "@/shared/components/calender";
import BudgetModal from "@/widgets/components/budget-modal";
import type { TransactionsDTO } from "@/services/types/transactions";
import { overlay } from "overlay-kit";

type MainCalendarProps = {
  selectedMonth: string;
  transactions?: TransactionsDTO;
};

const MainCalendar = ({ selectedMonth, transactions }: MainCalendarProps) => {
  const handleDateClick = (date: Date) => {
    overlay.open(({ isOpen, close }) => {
      return <BudgetModal open={isOpen} onClose={close} selectedDate={date} />;
    });
  };

  console.log({ transactions });

  return (
    <Calendar
      className="flex-1"
      selectedMonth={selectedMonth}
      transactions={transactions}
      onDateClick={handleDateClick}
    />
  );
};

export default MainCalendar;
