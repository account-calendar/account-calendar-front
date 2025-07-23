import MajorCategoryCreateModal from "@/widgets/components/major-category-create-modal";
import { overlay } from "overlay-kit";

const useMajorCategoryCreateModalManager = () => {
  const handleOpenMajorCategoryCreateModal = () => {
    overlay.open(({ isOpen, close }) => {
      return <MajorCategoryCreateModal open={isOpen} onClose={close} />;
    });
  };

  return {
    onOpenMajorCategoryCreateModal: handleOpenMajorCategoryCreateModal,
  };
};

export default useMajorCategoryCreateModalManager;
