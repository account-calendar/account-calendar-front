import Calendar from "@/shared/components/calender";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Calendar> = {
  title: "Shared/Calendar",
  component: Calendar,
  parameters: {
    layout: "fullscreen",
    docs: {},
  },
  args: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="h-[600px]">
      <Calendar selectedMonth="2025-06" onDateClick={console.log} />
    </div>
  ),
};
