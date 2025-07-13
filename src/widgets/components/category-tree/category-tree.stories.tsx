import Calendar from "@/shared/components/calender";
import CategoryTree from "@/widgets/components/category-tree";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Calendar> = {
  title: "Widgets/CategoryTree",
  component: CategoryTree,
  parameters: {
    layout: "fullscreen",
    docs: {},
  },
  args: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryTree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categories: [
      {
        title: "식비",
        icon: "🍚",
        children: [
          { title: "커피", icon: "☕" },
          { title: "간식", icon: "🍦" },
        ],
      },
      { title: "교통", icon: "🚃" },
    ],
  },
};
