import useGetTransactionDate from "@/services/hooks/transactions/use-get-transaction-date";
import Modal from "@/shared/components/modal";
import BudgetContainer from "@/widgets/components/budget-modal/_components/budget-container";
import EmptyBudget from "@/widgets/components/budget-modal/_components/empty-budget";
import useTransactionsModalManager from "@/widgets/hooks/use-transactions-modal-manager";
import dayjs from "dayjs";
import { useMemo } from "react";

type BudgetModalProps = {
  open: boolean;
  onClose: () => void;
  selectedDate: Date;
};

const BudgetModal = ({ open, onClose, selectedDate }: BudgetModalProps) => {
  const date = dayjs(selectedDate);

  const { data: transactionDateData } = useGetTransactionDate({
    params: { date: date.format("YYYY-MM-DD") },
  });
  const { onOpenTransactionsModal } = useTransactionsModalManager();

  const handleClickAdd = () => {
    onClose();
    onOpenTransactionsModal(dayjs(selectedDate).format("YYYY-MM-DD"));
  };

  const title = useMemo(() => date.format("YYYY년 M월 D일"), [selectedDate]);
  const isEmpty = useMemo(
    () =>
      !transactionDateData?.incomeList.length &&
      !transactionDateData?.expenseList.length,
    [transactionDateData]
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      onConfirm={handleClickAdd}
      confirmText="추가하러 가기"
    >
      {isEmpty ? (
        <EmptyBudget />
      ) : (
        <div className="flex flex-col gap-y-lg">
          {transactionDateData?.incomeList.length && (
            <BudgetContainer
              transactionType="income"
              transactions={transactionDateData.incomeList}
            />
          )}
          {transactionDateData?.expenseList.length && (
            <BudgetContainer
              transactionType="expense"
              transactions={transactionDateData.expenseList}
            />
          )}
        </div>
      )}
    </Modal>
  );
};

export default BudgetModal;
