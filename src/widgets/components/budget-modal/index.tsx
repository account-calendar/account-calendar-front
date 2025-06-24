import Modal from "@/shared/components/modal";
import EmptyBudget from "@/widgets/components/budget-modal/_components/empty-budget";
import dayjs from "dayjs";

type BudgetModalProps = {
  open: boolean;
  onClose: () => void;
  selectedDate?: Date;
};

const BudgetModal = ({ open, onClose, selectedDate }: BudgetModalProps) => {
  const title = dayjs(selectedDate).format("YYYY년 M월 D일");

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      onConfirm={() => {}}
      confirmText="추가하러 가기"
    >
      <EmptyBudget />
    </Modal>
  );
};

export default BudgetModal;
