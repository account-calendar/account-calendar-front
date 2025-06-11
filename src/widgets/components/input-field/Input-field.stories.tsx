import InputField from "@/widgets/components/input-field";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Widgets/Input Field",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
  },
};

export const Error: Story = {
  args: {
    title: "Error Title",
    errorMessage: "validation",
    inputOptions: {
      status: "error",
    },
  },
};
