import Field from "@/shared/components/field";
import Select from "@/shared/components/select";
import type { FieldProps } from "@/shared/components/field";
import type { SelectProps } from "@/shared/components/select";

type SelectFieldProps = FieldProps & {
  selectOptions?: SelectProps;
};

const SelectField = ({ selectOptions, ...fieldProps }: SelectFieldProps) => {
  return (
    <Field {...fieldProps}>
      <Select {...selectOptions} />
    </Field>
  );
};
export default SelectField;
