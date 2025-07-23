"use client";

import InputField from "@/entities/components/input-field";
import Button from "@/shared/components/button";
import FullModal from "@/shared/components/full-modal";

type MiddleCategoryCreateModalProps = {
  open: boolean;
  onClose: () => void;
};

const MiddleCategoryCreateModal = ({
  open,
  onClose,
}: MiddleCategoryCreateModalProps) => {
  const handleClickConfirm = () => {
    onClose();
  };

  return (
    <FullModal open={open} onClose={onClose}>
      <div className="px-xl pt-xl pb-4xl">
        <div className="flex flex-col gap-y-[20px]">
          <div className="flex items-center gap-x-sm typo-h-lg-strong text-white">
            <span>중분류 - </span>
            <span className="text-text-secondary">👀</span>
            <span>식비</span>
          </div>
          <div className="flex flex-col gap-y-lg">
            <InputField
              title="이모지"
              inputOptions={{
                placeholder: "이모지를 추가해주세요.",
              }}
            />
            <InputField
              title="카테고리 이름"
              required
              inputOptions={{
                placeholder: "카테고리 이름을 적어주세요.",
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-600 p-xl">
        <Button
          variant="primary"
          size="xl"
          className="w-full"
          type="submit"
          onClick={handleClickConfirm}
        >
          등록하기
        </Button>
      </div>
    </FullModal>
  );
};

export default MiddleCategoryCreateModal;
