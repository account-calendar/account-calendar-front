import type { PropsWithChildren } from "react";

export type FieldProps = PropsWithChildren & {
  title: string;
  errorMessage?: string;
  required?: boolean;
};

const Field = ({ children, title, errorMessage, required }: FieldProps) => {
  return (
    <div className="flex flex-col gap-xs ">
      <div className="flex gap-x-xs typo-h-xs-strong">
        <span className="text-text-strong">{title}</span>
        {required && <span className="text-red-200">*</span>}
      </div>
      {children}
      {errorMessage && (
        <span className="typo-cap-sm-weak text-text-danger">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Field;
