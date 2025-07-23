import AccountDeletionModal from "@/widgets/components/account-deletion-modal";
import { overlay } from "overlay-kit";

const useAccountDeletionModal = () => {
  const handleOpenAccountDeletionModal = () => {
    overlay.open(({ isOpen, close }) => {
      return <AccountDeletionModal open={isOpen} onClose={close} />;
    });
  };

  return {
    onOpenAccountDeletionModal: handleOpenAccountDeletionModal,
  };
};

export default useAccountDeletionModal;
