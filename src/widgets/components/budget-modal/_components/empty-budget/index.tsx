import Icon from "@/shared/components/Icon";

const EmptyBudget = () => {
  return (
    <div className="bg-bg-base-weak rounded-2xl px-3xl py-4xl flex flex-col items-center justify-center gap-xl">
      <div className="bg-bg-primary rounded-full size-4xl flex items-center justify-center">
        <Icon icon="ALERT" className="size-[22px] text-white" />
      </div>
      <p className="text-center typo-h-md-strong text-text-strong">
        아직 입력된 수입 또는
        <br />
        지출 내역이 없어요.
      </p>
    </div>
  );
};

export default EmptyBudget;
