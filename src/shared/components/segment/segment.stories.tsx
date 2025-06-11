import Segment from "@/shared/components/segment";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Segment",
  component: Segment,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Segment",
  },
} satisfies Meta<typeof Segment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    selected: true,
  },
};
