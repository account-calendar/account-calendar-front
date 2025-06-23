import TextArea from "@/shared/components/text-area";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Placeholder",
    value: "Value",
  },
};
