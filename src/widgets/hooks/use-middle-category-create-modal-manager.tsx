import MiddleCategoryCreateModal from "@/widgets/components/middle-category-create-modal";
import { overlay } from "overlay-kit";

const useMiddleCategoryCreateModalManager = () => {
  const handleOpenMiddleCategoryCreateModal = () => {
    overlay.open(({ isOpen, close }) => {
      return <MiddleCategoryCreateModal open={isOpen} onClose={close} />;
    });
  };

  return {
    onOpenMiddleCategoryCreateModal: handleOpenMiddleCategoryCreateModal,
  };
};

export default useMiddleCategoryCreateModalManager;
