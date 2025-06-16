import Field from "@/shared/components/field";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Click Me",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Heading",
    children: "children",
    errorMessage: "errorMessage",
    required: true,
  },
};
