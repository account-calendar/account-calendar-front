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
    <div className="flex gap-x-ds-8 bg-gray-100 p-l">
      <div className="flex flex-col gap-y-ds-4">
        {Object.keys(ICONS).map((icon) => (
          <div
            key={icon}
            className="flex items-center gap-x-ds-6 border-b border-black-40"
          >
            <Icon icon={icon as IconList} className="w-2xl" />
            <Icon icon={icon as IconList} className="w-2xl text-text-error" />
            <span className="typo-bd-2">{icon}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
