import InputField from "@/entities/components/input-field";
import Button from "@/shared/components/button";
import CategoryCard from "@/shared/components/category-card";
import FullModal from "@/shared/components/full-modal";

type MiddleCategorySelectModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const MiddleCategorySelectModal = ({
  open,
  onClose,
  onConfirm,
}: MiddleCategorySelectModalProps) => {
  const handleClickConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <FullModal open={open} onClose={onClose}>
      <div className="px-xl">
        <div className="flex flex-col gap-y-[48px]">
          <div className="flex flex-col gap-y-xl">
            <div className="flex items-center gap-x-sm typo-h-lg-strong text-white">
              <span>중분류 - </span>
              <span className="text-text-secondary">👀</span>
              <span>식비</span>
            </div>
            <div className="flex flex-col gap-y-lg">
              <InputField title="이모지" />
              <InputField title="카테고리 이름" required />
            </div>
          </div>
          <div className="flex flex-col gap-y-lg">
            <span className="typo-h-lg-strong text-text-strong">
              ‘🍚 식비’에 등록된 중분류
            </span>
            <div className="grid grid-cols-2 gap-md">
              <CategoryCard
                title="식비"
                icon="🍚"
                onClick={handleClickConfirm}
              />
              <CategoryCard title="교통" icon="🚃" />
              <CategoryCard title="쇼핑" icon="🛍" />
              <CategoryCard title="기타" icon="❓" />
              <CategoryCard title="해당없음" icon="❎" />
            </div>
          </div>
        </div>
        <div className="bg-gray-600 py-xl">
          <Button variant="primary" size="xl" className="w-full" type="submit">
            등록하기
          </Button>
        </div>
      </div>
    </FullModal>
  );
};

export default MiddleCategorySelectModal;
