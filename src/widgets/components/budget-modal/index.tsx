import Modal from "@/shared/components/modal";
import EmptyBudget from "@/widgets/components/budget-modal/_components/empty-budget";
import useTransactionsModalManager from "@/widgets/hooks/use-transactions-modal-manager";
import dayjs from "dayjs";

type BudgetModalProps = {
  open: boolean;
  onClose: () => void;
  selectedDate?: Date;
};

const BudgetModal = ({ open, onClose, selectedDate }: BudgetModalProps) => {
  const { onOpenTransactionsModal } = useTransactionsModalManager();
  const title = dayjs(selectedDate).format("YYYY년 M월 D일");

  const handleConfirm = () => {
    onClose();

    onOpenTransactionsModal(dayjs(selectedDate).format("YYYY-MM-DD"));
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      onConfirm={handleConfirm}
      confirmText="추가하러 가기"
    >
      <EmptyBudget />
    </Modal>
  );
};

export default BudgetModal;
