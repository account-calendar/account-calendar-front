import Calendar from "@/shared/components/calender";
import MiddleCategory from "@/widgets/components/category-tree/_components/middle-category";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Calendar> = {
  title: "Widgets/CategoryTree/MiddleCategory",
  component: MiddleCategory,
  parameters: {
    layout: "fullscreen",
    docs: {},
  },
  args: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MiddleCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "Major Category", icon: "🐻" },
};

export const Disabled: Story = {
  args: { title: "Major Category", icon: "🐻", disabled: true },
};
