import SelectField from "@/widgets/components/select-field";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Widgets/Select Field",
  component: SelectField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    required: true,
    selectOptions: {
      value: "Value",
      placeholder: "Placeholder",
    },
  },
};
