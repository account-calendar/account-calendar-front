"use client";

import { APP_ROUTES } from "@/services/constants/app-routes";
import Button from "@/shared/components/button";
import useAccountDeletionModal from "@/widgets/hooks/use-account-deletion-modal";
import useBudgetLimitModal from "@/widgets/hooks/use-budget-limit-modal";
import { useRouter } from "next/navigation";

const MyPage = () => {
  const router = useRouter();
  const { onOpenBudgetLimitModal } = useBudgetLimitModal();
  const { onOpenAccountDeletionModal } = useAccountDeletionModal();

  const myPageItems = [
    {
      title: "카테고리 관리",
      onClick: () => {
        router.push(APP_ROUTES.CATEGORY);
      },
    },
    {
      title: "지출제한 관리",
      onClick: onOpenBudgetLimitModal,
    },
    {
      title: "로그아웃",
      onClick: () => {
        router.push(APP_ROUTES.LOGIN);
      },
    },
    {
      title: "계정탈퇴",
      onClick: onOpenAccountDeletionModal,
    },
  ];

  return (
    <section className="px-xl pt-lg flex flex-col gap-y-lg">
      <h2 className="typo-h-lg-strong text-text-strong">My page</h2>
      <div className="flex flex-col gap-y-sm">
        {myPageItems.map((item) => (
          <Button
            key={item.title}
            onClick={item.onClick}
            variant="tertiary"
            size="lg"
            className="w-full justify-between"
            iconPosition="right"
            iconOption={{
              icon: "CHEVRON_RIGHT",
            }}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default MyPage;
