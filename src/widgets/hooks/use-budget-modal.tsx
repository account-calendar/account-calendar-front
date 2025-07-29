import BudgetModal from "@/widgets/components/budget-modal";
import { overlay } from "overlay-kit";

const useBudgetModalManager = () => {
  const handleDateClick = (date: Date) => {
    overlay.open(({ isOpen, close }) => {
      return <BudgetModal open={isOpen} onClose={close} selectedDate={date} />;
    });
  };

  return {
    onOpenBudgetModal: handleDateClick,
  };
};

export default useBudgetModalManager;
