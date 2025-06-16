import MonthPicker from "@/shared/components/month-picker";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/MonthPicker",
  component: MonthPicker,
  parameters: {
    layout: "centered",
  },
  args: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MonthPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedMonth: "2022-03",
    onMonthChange: (month) => {
      alert(month);
    },
  },
};
