import Button from "@/shared/components/button";
import Icon from "@/shared/components/Icon";
import { cn } from "@/shared/utils/style";
import { Dialog, DialogPanel } from "@headlessui/react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  description: string;
};

const Modal = ({ open, onClose, children, title, description }: ModalProps) => {
  return (
    <Dialog
      open={open}
      as="div"
      className="fixed left-[0] top-[0] inset-0 z-50 w-full h-full flex items-center justify-center bg-dimmer backdrop-blur-xs px-xl"
      onClose={onClose}
    >
      <DialogPanel
        transition
        className={cn(
          "rounded-3xl bg-bg-base-normal duration-300 ease-out w-full max-h-[506px] max-w-[344px] pt-4xl px-2xl pb-3xl flex flex-col gap-xl overflow-y-auto",
          "data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        )}
      >
        <div className="flex flex-col gap-sm">
          <div className="flex items-center justify-between text-text-strong">
            <span className="typo-h-lg-strong">{title}</span>
            <Icon icon="CLOSE" className="size-2xl" />
          </div>
          <span className="text-text-normal typo-bd-md-weak">
            {description}
          </span>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
        <div className="flex gap-sm gap-x-md">
          <Button className="flex-1" variant="secondary" size="xl">
            Cancel
          </Button>
          <Button className="flex-1" variant="primary" size="xl">
            Confirm
          </Button>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default Modal;
