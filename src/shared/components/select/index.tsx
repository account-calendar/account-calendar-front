import Icon from "@/shared/components/Icon";
import { cn } from "@/shared/utils/style";

export type SelectProps = {
  className?: string;
  value?: string;
  iconString?: string;
  placeholder?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Select = ({
  className,
  value,
  iconString,
  placeholder,
  disabled,
  onClick,
}: SelectProps) => {
  return (
    <button
      className={cn(
        "group cursor-pointer bg-bg-base-normal h-[44px] px-md rounded-lg text-text-weak flex items-center gap-x-xs transition-all w-full text-left",
        value && "text-text-strong",
        "hover:bg-bg-base-strong",
        "active:bg-bg-base-weak",
        "disabled:bg-bg-disabled disabled:text-text-disabled",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="flex-1 flex items-center gap-x-sm">
        {iconString && <span>{iconString}</span>}
        {value || placeholder}
      </div>
      <Icon
        icon="CHEVRON_RIGHT"
        className="size-2xl text-text-weak group-disabled:text-text-disabled"
      />
    </button>
  );
};

export default Select;
