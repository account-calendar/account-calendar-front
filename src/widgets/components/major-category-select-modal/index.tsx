import Button from "@/shared/components/button";
import CategoryCard from "@/shared/components/category-card";
import FullModal from "@/shared/components/full-modal";
import Input from "@/shared/components/input";

type MajorCategorySelectModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const MajorCategorySelectModal = ({
  open,
  onClose,
  onConfirm,
}: MajorCategorySelectModalProps) => {
  const handleClickConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <FullModal open={open} onClose={onClose} title="카테고리">
      <div className="px-xl pt-lg pb-4xl flex flex-col gap-y-lg">
        <Input
          placeholder="Search"
          className="w-full"
          iconOption={{
            icon: "SEARCH",
          }}
        />
        <div className="grid grid-cols-2 gap-md">
          <CategoryCard title="식비" icon="🍚" onClick={handleClickConfirm} />
          <CategoryCard title="교통" icon="🚃" />
          <CategoryCard title="쇼핑" icon="🛍" />
          <CategoryCard title="고정지출" icon="🧾" />
          <CategoryCard title="생활" icon="🧻" />
          <CategoryCard title="기타" icon="❓" />
          <CategoryCard title="해당없음" icon="❎" />
        </div>
      </div>
      <div className="p-xl bg-gray-600">
        <Button variant="primary" size="xl" className="w-full" type="submit">
          새로 만들기
        </Button>
      </div>
    </FullModal>
  );
};

export default MajorCategorySelectModal;
