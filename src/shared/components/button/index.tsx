import type { IconProps } from "@/shared/components/Icon";
import Icon from "@/shared/components/Icon";
import { cn } from "@/shared/utils/style";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "text" | "icon";
type ButtonSize = "xl" | "lg" | "md" | "sm" | "xs";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconOption?: IconProps;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
};

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  iconOption,
  iconPosition = "left",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        DEFAULT_STYLE,
        VARIANT_STYLE[variant],
        SIZE_STYLE[size].button,
        DISABLED_STYLE,
        className
      )}
      {...props}
    >
      {iconOption && iconPosition === "left" && (
        <Icon
          {...iconOption}
          className={cn(SIZE_STYLE[size].icon, iconOption.className)}
        />
      )}
      {children}
      {iconOption && iconPosition === "right" && (
        <Icon
          {...iconOption}
          className={cn(SIZE_STYLE[size].icon, iconOption.className)}
        />
      )}
    </button>
  );
};

export default Button;

const DEFAULT_STYLE = clsx(
  "flex items-center justify-center gap-x-xs transition-all cursor-pointer text-nowrap w-fit"
);

const DISABLED_STYLE = clsx(
  "disabled:cursor-not-allowed disabled:bg-bg-disabled disabled:text-text-disabled disabled:border-none"
);

const VARIANT_STYLE: Record<ButtonVariant, string> = {
  primary: clsx(
    "bg-bg-primary text-white",
    "hover:bg-bg-primary-hover",
    "active:bg-bg-primary-pressed"
  ),
  secondary: clsx(
    "border border-border-secondary text-text-on-secondary",
    "hover:bg-bg-secondary-hover",
    "active:bg-bg-secondary-pressed"
  ),
  tertiary: clsx(
    "bg-bg-tertiary text-white",
    "hover:bg-bg-tertiary-hover",
    "active:bg-bg-tertiary-pressed"
  ),
  text: clsx(
    "text-text-primary",
    "hover:text-text-primary-hover",
    "active:text-text-primary-pressed"
  ),
  icon: clsx(
    "text-white",
    "hover:bg-bg-secondary-hover",
    "active:bg-bg-secondary-pressed"
  ),
};

const SIZE_STYLE: Record<
  ButtonSize,
  {
    button: string;
    icon?: string;
  }
> = {
  xl: {
    button: clsx("h-[56px] px-lg rounded-xl typo-btn-xl-strong"),
  },
  lg: {
    button: clsx("h-[48px] px-lg rounded-lg typo-btn-lg-strong"),
    icon: clsx("size-2xl"),
  },
  md: {
    button: clsx("h-[40px] px-lg rounded-lg typo-btn-md-normal"),
  },
  sm: {
    button: clsx("h-4xl px-xs rounded-md"),
    icon: clsx("size-2xl"),
  },
  xs: {
    button: clsx("h-[24px] px-xs typo-btn-sm-normal"),
    icon: clsx("size-md"),
  },
};
