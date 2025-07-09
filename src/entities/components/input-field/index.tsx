import Field from "@/shared/components/field";
import Input from "@/shared/components/input";
import type { FieldProps } from "@/shared/components/field";
import type { InputProps } from "@/shared/components/input";

type InputFieldProps = FieldProps & {
  inputOptions?: InputProps;
};

const InputField = ({ inputOptions, ...fieldProps }: InputFieldProps) => {
  const inputStatus = fieldProps?.errorMessage ? "error" : inputOptions?.status;
  const required = fieldProps?.required;

  return (
    <Field {...fieldProps}>
      <Input status={inputStatus} required={required} {...inputOptions} />
    </Field>
  );
};
export default InputField;
