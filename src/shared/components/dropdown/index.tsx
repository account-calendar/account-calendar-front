import Button from "@/shared/components/button";
import { cn } from "@/shared/utils/style";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react";

type DropdownProps = {
  items: {
    label: string;
    onClick: () => void;
  }[];
};

const Dropdown = ({ items }: DropdownProps) => {
  return (
    <Menu>
      <MenuButton></MenuButton>
      <MenuButton as={Fragment}>
        <Button
          variant="icon"
          iconOption={{ icon: "MORE", className: "text-text-strong" }}
          size="sm"
          className="text-text-strong"
        />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom"
        className={cn(
          "mt-sm w-fit origin-top-right rounded-xl bg-bg-tertiary border border-bg-base-strong p-sm typo-btn-md-normal text-white flex flex-col overflow-y-scroll !max-h-[218px] h-fit",
          "transition duration-100 ease-out",
          "focus:outline-none",
          "data-closed:scale-95 data-closed:opacity-0"
        )}
      >
        {items.map((item) => (
          <MenuItem key={item.label}>
            <Button
              variant="tertiary"
              size="md"
              className="min-h-[40px]"
              onClick={item.onClick}
            >
              {item.label}
            </Button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
