import type { TransactionInfoDTO } from "@/services/types/transactions";
import { cn } from "@/shared/utils/style";

type BudgetContainerProps = {
  transactionType: "income" | "expense";
  transactions: TransactionInfoDTO[];
};

const BudgetContainer = ({
  transactionType,
  transactions,
}: BudgetContainerProps) => {
  return (
    <div className="flex flex-col gap-y-sm">
      <span className="typo-sub-md-strong text-text-strong">
        {transactionType === "income" ? "수입" : "지출"}
      </span>
      <div className="flex flex-col gap-y-sm">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="px-lg h-[66px] bg-bg-base-weak rounded-lg text-text-strong flex items-center justify-between"
          >
            <div className="flex flex-col gap-y-xs">
              <div className="flex items-center gap-x-sm typo-sub-lg-normal">
                <span>❎</span>
                <span>{transaction?.majorCategory ?? "해당없음"}</span>
              </div>
              {transaction.middleCategory && (
                <div className="flex items-center gap-x-sm typo-lb-md-strong">
                  <span>❎</span>
                  <span>{transaction.middleCategory}</span>
                </div>
              )}
            </div>
            <span
              className={cn(
                "typo-h-sm-strong",
                transactionType === "income"
                  ? "text-text-income"
                  : "text-text-expense"
              )}
            >
              ₩{transaction.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetContainer;
