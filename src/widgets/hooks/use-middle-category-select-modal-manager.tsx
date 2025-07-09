import MiddleCategorySelectModal from "@/widgets/components/middle-category-select-modal";
import { overlay } from "overlay-kit";

const useMiddleCategorySelectModalManager = () => {
  const handleOpenMiddleCategorySelectModal = (onConfirm: () => void) => {
    overlay.open(({ isOpen, close }) => {
      return (
        <MiddleCategorySelectModal
          open={isOpen}
          onClose={close}
          onConfirm={onConfirm}
        />
      );
    });
  };

  return {
    onOpenMiddleCategorySelectModal: handleOpenMiddleCategorySelectModal,
  };
};

export default useMiddleCategorySelectModalManager;
