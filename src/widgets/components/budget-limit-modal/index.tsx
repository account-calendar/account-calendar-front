import Button from "@/shared/components/button";
import FullModal from "@/shared/components/full-modal";
import Input from "@/shared/components/input";

type BudgetLimitModalProps = {
  open: boolean;
  onClose: () => void;
};

const BudgetLimitModal = ({ open, onClose }: BudgetLimitModalProps) => {
  const handleConfirm = () => {
    onClose();
  };

  return (
    <FullModal open={open} onClose={onClose}>
      <div className="px-xl py-lg flex flex-col gap-y-4xl">
        <div className="flex flex-col gap-y-lg">
          <div className="flex flex-col gap-y-xs">
            <h2 className="typo-h-lg-strong text-text-strong">
              지출 제한 관리
            </h2>
            <h3 className="typo-bd-md-weak text-text-weak">
              이번 달에 얼마까지 쓸지 미리 정해두고, 소비를 관리해보세요.
            </h3>
          </div>
          <Input placeholder="한달에 얼마 쓸 건지 알려주세요." />
        </div>
        <Button
          variant="primary"
          size="xl"
          className="w-full"
          onClick={handleConfirm}
        >
          등록하기
        </Button>
      </div>
    </FullModal>
  );
};

export default BudgetLimitModal;
