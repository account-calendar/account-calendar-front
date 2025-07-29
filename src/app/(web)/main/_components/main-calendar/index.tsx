import Calendar from "@/shared/components/calender";
import type { TransactionsDTO } from "@/services/types/transactions";
import useBudgetModalManager from "@/widgets/hooks/use-budget-modal";

type MainCalendarProps = {
  selectedMonth: string;
  transactions?: TransactionsDTO;
};

const MainCalendar = ({ selectedMonth, transactions }: MainCalendarProps) => {
  const { onOpenBudgetModal } = useBudgetModalManager();

  return (
    <Calendar
      className="flex-1"
      selectedMonth={selectedMonth}
      transactions={transactions}
      onDateClick={onOpenBudgetModal}
    />
  );
};

export default MainCalendar;
