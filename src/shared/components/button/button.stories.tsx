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
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const PrimaryXL: Story = {
  args: {
    variant: "primary",
    size: "xl",
  },
};
export const PrimaryLG: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
};
export const PrimaryMD: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
};
export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
  },
};

export const SecondaryXL: Story = {
  args: {
    variant: "secondary",
    size: "xl",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    size: "xs",
    iconOption: {
      icon: "USER",
    },
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    size: "sm",
    iconOption: {
      icon: "USER",
    },
    children: undefined,
  },
};
