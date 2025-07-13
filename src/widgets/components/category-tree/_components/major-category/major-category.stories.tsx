import Calendar from "@/shared/components/calender";
import MajorCategory from "@/widgets/components/category-tree/_components/major-category";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Calendar> = {
  title: "Widgets/CategoryTree/MajorCategory",
  component: MajorCategory,
  parameters: {
    layout: "fullscreen",
    docs: {},
  },
  args: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MajorCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "Major Category", icon: "🐻" },
};

export const Disabled: Story = {
  args: { title: "Major Category", icon: "🐻", disabled: true },
};
