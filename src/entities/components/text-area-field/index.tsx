import TextArea, { type TextAreaProps } from "@/shared/components/text-area";
import type { FieldProps } from "@/shared/components/field";
import Field from "@/shared/components/field";

type TextAreaFieldProps = FieldProps & {
  textAreaOptions?: TextAreaProps;
};

const TextAreaField = ({
  textAreaOptions,
  ...fieldProps
}: TextAreaFieldProps) => {
  return (
    <Field {...fieldProps}>
      <TextArea {...textAreaOptions} />
    </Field>
  );
};

export default TextAreaField;
