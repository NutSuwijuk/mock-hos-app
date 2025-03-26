import { strict } from "assert";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
}

const FormInput = (props: FormInputProps) => {
  const { name, type, label, defaultValue, placeholder } = props;
  console.log(props.name)

  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} defaultValue={defaultValue}></Input>
    </div>
  );
};
export default FormInput;
