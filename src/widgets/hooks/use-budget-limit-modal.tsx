import BudgetLimitModal from "@/widgets/components/budget-limit-modal";
import { overlay } from "overlay-kit";

const useBudgetLimitModal = () => {
  const handleOpenBudgetLimitModal = () => {
    overlay.open(({ isOpen, close }) => {
      return <BudgetLimitModal open={isOpen} onClose={close} />;
    });
  };

  return {
    onOpenBudgetLimitModal: handleOpenBudgetLimitModal,
  };
};

export default useBudgetLimitModal;
