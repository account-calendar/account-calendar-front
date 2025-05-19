import Button from "@/shared/components/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Click Me",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
