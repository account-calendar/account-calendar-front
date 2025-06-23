import Button from "@/shared/components/button";
import Modal from "@/shared/components/modal";
import useDisclosure from "@/shared/hooks/use-disclosure";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Modal",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <div>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal
          open={isOpen}
          onClose={onClose}
          title="Title"
          description="Description"
        >
          <div className="typo-h-lg-strong text-text-strong bg-bg-base-weak h-[200px] flex items-center justify-center rounded-3xl">
            Relace Contents
          </div>
        </Modal>
      </div>
    );
  },
};
