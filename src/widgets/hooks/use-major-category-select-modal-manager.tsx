import MajorCategorySelectModal from "@/widgets/components/major-category-select-modal";
import { overlay } from "overlay-kit";

const useMajorCategorySelectModalManager = () => {
  const handleOpenMajorCategorySelectModal = (onConfirm: () => void) => {
    overlay.open(({ isOpen, close }) => {
      return (
        <MajorCategorySelectModal
          open={isOpen}
          onClose={close}
          onConfirm={onConfirm}
        />
      );
    });
  };

  return {
    onOpenMajorCategorySelectModal: handleOpenMajorCategorySelectModal,
  };
};

export default useMajorCategorySelectModalManager;
