import Dropdown from "@/shared/components/dropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  args: {
    items: [
      { label: "Item 1", onClick: () => {} },
      { label: "Item 2", onClick: () => {} },
      { label: "Item 3", onClick: () => {} },
    ],
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
