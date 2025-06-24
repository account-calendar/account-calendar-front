import useMainCalendarManager from "@/app/(web)/main/_components/main-calendar/_hooks/use-main-calendar-manager";
import Calendar from "@/shared/components/calender";
import BudgetModal from "@/widgets/components/budget-modal";

type MainCalendarProps = {
  selectedMonth: string;
};

const MainCalendar = ({ selectedMonth }: MainCalendarProps) => {
  const {
    modalManager: { isOpen },
    selectedDate,
    onDateClick,
    onCloseBudgetModal,
  } = useMainCalendarManager();

  return (
    <>
      <Calendar
        className="flex-1"
        selectedMonth={selectedMonth}
        onDateClick={onDateClick}
      />
      {selectedDate && (
        <BudgetModal
          open={isOpen}
          onClose={onCloseBudgetModal}
          selectedDate={selectedDate}
        />
      )}
    </>
  );
};

export default MainCalendar;
