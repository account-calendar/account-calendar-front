import ProgressBar from "@/shared/components/progress-bar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressBar> = {
  title: "Shared/ProgressBar",
  component: ProgressBar,
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
  args: {
    max: 100,
    current: 0,
  },
};

export const Normal: Story = {
  args: {
    max: 100,
    current: 30,
  },
};

export const Warning: Story = {
  args: {
    max: 100,
    current: 70,
  },
};

export const Danger: Story = {
  args: {
    max: 100,
    current: 100,
  },
};
