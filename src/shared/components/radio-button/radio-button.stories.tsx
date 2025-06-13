import RadioButton from "@/shared/components/radio-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Radio Button",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Segment",
  },
} satisfies Meta<typeof RadioButton>;

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
