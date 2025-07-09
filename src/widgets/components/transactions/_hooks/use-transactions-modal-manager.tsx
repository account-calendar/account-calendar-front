import Transactions from "@/widgets/components/transactions";
import { overlay } from "overlay-kit";

const useTransactionsModalManager = () => {
  const handleOpenTransactionsModal = (date: string) => {
    overlay.open(({ isOpen, close }) => {
      return <Transactions open={isOpen} onClose={close} date={date} />;
    });
  };

  return {
    onOpenTransactionsModal: handleOpenTransactionsModal,
  };
};

export default useTransactionsModalManager;
