import ICONS, { type IconList } from "@/shared/components/Icon/constants";
import Icon from "@/shared/components/Icon";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Shared/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  args: {
    className: "w-2xl",
    icon: "USER",
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(ICONS),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: () => (
    <div className="flex flex-col bg-gray-600 p-lg rounded-2xl">
      {Object.keys(ICONS).map((icon) => (
        <div
          key={icon}
          className="flex items-center gap-x-lg not-last:border-b border-black-40 text-text-strong p-lg"
        >
          <Icon icon={icon as IconList} className="w-2xl" />
          <Icon icon={icon as IconList} className="w-2xl text-text-danger" />
          <span className="typo-bd-2">{icon}</span>
        </div>
      ))}
    </div>
  ),
};
