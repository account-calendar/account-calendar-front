import InputField from "@/entities/components/input-field";
import TextAreaField from "@/entities/components/text-area-field";
import Button from "@/shared/components/button";
import FullModal from "@/shared/components/full-modal";

type MajorCategoryCreateModalProps = {
  open: boolean;
  onClose: () => void;
};

const MajorCategoryCreateModal = ({
  open,
  onClose,
}: MajorCategoryCreateModalProps) => {
  const handleClickConfirm = () => {
    onClose();
  };

  return (
    <FullModal open={open} onClose={onClose} title="카테고리">
      <div className="px-xl pt-lg pb-4xl flex flex-col gap-y-lg">
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
        <TextAreaField
          title="메모"
          textAreaOptions={{
            placeholder: "메모를 입력해주세요.",
          }}
        />
      </div>
      <div className="p-xl bg-gray-600">
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

export default MajorCategoryCreateModal;
