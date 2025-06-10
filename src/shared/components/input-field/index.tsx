import Field from "@/shared/components/field";
import Input from "@/shared/components/input";
import type { FieldProps } from "@/shared/components/field";
import type { InputProps } from "@/shared/components/input";

type InputFieldProps = FieldProps & {
  inputOptions?: InputProps;
};

const InputField = ({ inputOptions, ...fieldProps }: InputFieldProps) => {
  const inputStatus = fieldProps?.errorMessage ? "error" : inputOptions?.status;

  return (
    <Field {...fieldProps}>
      <Input status={inputStatus} {...inputOptions} />
    </Field>
  );
};
export default InputField;
