import Button from "@/shared/components/button";
import FullModal from "@/shared/components/full-modal";
import useDisclosure from "@/shared/hooks/use-disclosure";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Modal/FullModal",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FullModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <div>
        <Button onClick={onOpen}>Open Modal</Button>
        <FullModal open={isOpen} onClose={onClose} title="Title">
          <div className="flex flex-col items-center gap-y-2xl text-white p-lg">
            <div>Test</div>
            <div className="h-[600px]">Contents</div>
            <div>Bottom</div>
          </div>
        </FullModal>
      </div>
    );
  },
};
