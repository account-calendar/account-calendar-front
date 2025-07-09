import Calendar from "@/shared/components/calender";
import BudgetModal from "@/widgets/components/budget-modal";
import { overlay } from "overlay-kit";

type MainCalendarProps = {
  selectedMonth: string;
};

const MainCalendar = ({ selectedMonth }: MainCalendarProps) => {
  const handleDateClick = (date: Date) => {
    overlay.open(({ isOpen, close }) => {
      return <BudgetModal open={isOpen} onClose={close} selectedDate={date} />;
    });
  };

  return (
    <Calendar
      className="flex-1"
      selectedMonth={selectedMonth}
      onDateClick={handleDateClick}
    />
  );
};

export default MainCalendar;
