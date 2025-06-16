import Select from "@/shared/components/select";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const WithLabel: Story = {
  args: {
    value: "Value",
    placeholder: "Placeholder",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Value",
  },
};
