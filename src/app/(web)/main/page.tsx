"use client";

import MainCalendar from "@/app/(web)/main/_components/main-calendar";
import useGetUser from "@/services/hooks/auth/use-get-user";
import useGetTransactions from "@/services/hooks/transactions/use-get-transactions";
import Button from "@/shared/components/button";
import MonthPicker from "@/shared/components/month-picker";
import ProgressBar from "@/shared/components/progress-bar";
import useBudgetLimitModal from "@/widgets/hooks/use-budget-limit-modal";
import dayjs from "dayjs";
import { useState } from "react";

const MainPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString());
  const { onOpenBudgetLimitModal } = useBudgetLimitModal();

  const { data: userData } = useGetUser();
  const { data: transactionsData } = useGetTransactions({
    params: {
      startDate: dayjs(selectedMonth).startOf("month").format("YYYY-MM-DD"),
      endDate: dayjs(selectedMonth).endOf("month").format("YYYY-MM-DD"),
    },
  });

  return (
    <div className="flex flex-col text-white flex-1 px-xl pb-2xl">
      <div className="mb-md">
        <MonthPicker
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
        />
      </div>
      <div className="flex flex-col mb-2xl">
        <div className="mb-xs bg-bg-base-weak rounded-lg px-md py-lg flex flex-col">
          <div className="mb-sm flex flex-col">
            <span className="typo-lb-sm-normal text-text-normal">합계</span>
            <span className="typo-h-md-strong text-text-strong">
              {(
                (transactionsData?.total.income ?? 0) -
                (transactionsData?.total.expense ?? 0)
              ).toLocaleString()}
            </span>
          </div>
          <div className="mb-sm flex gap-md">
            <div className="flex-1 flex flex-col">
              <span className="typo-lb-sm-normal text-text-normal">
                총 지출
              </span>
              <span className="typo-h-md-strong text-text-expense">
                {transactionsData?.total.expense.toLocaleString()}
              </span>
            </div>
            <div className="flex-1 flex flex-col">
              <span className="typo-lb-sm-normal text-text-normal">
                총 수입
              </span>
              <span className="typo-h-md-strong text-text-income">
                {transactionsData?.total.income.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="typo-lb-sm-normal text-text-normal mb-sm">
              지출제한
            </span>
            <ProgressBar
              max={userData?.targetExpense}
              current={transactionsData?.total.expense ?? 0}
            />
          </div>
        </div>
        <Button
          variant="text"
          size="xs"
          className="h-fit self-end"
          iconOption={{ icon: "EDIT" }}
          onClick={onOpenBudgetLimitModal}
        >
          지출 제한 수정하기
        </Button>
      </div>
      <MainCalendar
        selectedMonth={selectedMonth}
        transactions={transactionsData}
      />
    </div>
  );
};

export default MainPage;
