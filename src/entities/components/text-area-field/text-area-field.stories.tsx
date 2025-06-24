import TextAreaField from "@/entities/components/text-area-field";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Entities/Text Area Field",
  component: TextAreaField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextAreaField>;

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
    textAreaOptions: {
      placeholder: "Placeholder",
    },
  },
};
