import Modal from "@/shared/components/modal";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/services/constants/app-routes";

type AccountDeletionModalProps = {
  open: boolean;
  onClose: () => void;
};

const AccountDeletionModal = ({ open, onClose }: AccountDeletionModalProps) => {
  const router = useRouter();
  const handleConfirm = () => {
    onClose();
    router.push(APP_ROUTES.LOGIN);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="정말 탈퇴하시겠어요?"
      description="탈퇴하면 지금까지 저장된 수입·지출 내역이 모두 삭제되며, 삭제된 데이터 는복구할 수 없습니다."
      onConfirm={handleConfirm}
      onCancel={onClose}
      confirmText="탈퇴하기"
      cancelText="취소"
    ></Modal>
  );
};

export default AccountDeletionModal;
