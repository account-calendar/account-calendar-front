import Button from "@/shared/components/button";
import { cn } from "@/shared/utils/style";
import { Dialog, DialogPanel } from "@headlessui/react";

type FullModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const FullModal = ({ open, onClose, children, title }: FullModalProps) => {
  return (
    <Dialog
      open={open}
      as="div"
      className="fixed left-[0] top-[0] inset-0 z-50 w-full h-full flex items-center justify-center bg-gray-600"
      onClose={() => {}}
    >
      <DialogPanel
        transition
        className={cn(
          "w-full max-w-[430px] h-full flex flex-col",
          "data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        )}
      >
        <div className="flex items-center justify-between text-text-strong h-[56px] pl-xl pr-sm">
          <span className="typo-h-lg-strong flex-1">logo</span>
          <span className="typo-h-lg-strong flex-1 text-center">{title}</span>
          <div className="flex-1 flex items-center justify-end">
            <Button
              className="p-xs h-[40px] w-[40px]"
              variant="icon"
              size="sm"
              onClick={onClose}
              iconOption={{ icon: "CLOSE" }}
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </DialogPanel>
    </Dialog>
  );
};

export default FullModal;
