import Input from "@/shared/components/input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    iconOption: {
      icon: "SEARCH",
    },
  },
};

export const Error: Story = {
  args: {
    status: "error",
    value: "Value Value",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Value Value",
  },
};
