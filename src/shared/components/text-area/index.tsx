import { cn } from "@/shared/utils/style";

export type TextAreaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  className?: string;
};

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={cn(
        "ring-1 ring-bg-base-normal bg-bg-base-normal transition-all resize-none px-lg py-md rounded-xl placeholder:text-text-weak caret-purple-200 outline-0 text-white",
        "focus:ring-border-primary-hover",
        "disabled:text-text-disabled disabled:placeholder:text-text-disabled disabled:bg-bg-disabled disabled:ring-bg-disabled",
        className
      )}
      {...props}
    />
  );
};

export default TextArea;
