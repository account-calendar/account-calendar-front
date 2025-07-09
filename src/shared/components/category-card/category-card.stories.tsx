import CategoryCard from "@/shared/components/category-card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/CategoryCard",
  component: CategoryCard,
  parameters: {
    layout: "centered",
  },
  args: {},
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "💰",
    title: "CategoryCard",
    className: "w-[180px]",
  },
};
