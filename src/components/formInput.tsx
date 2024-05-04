import { IFormInput } from "../types/components";

export function FormInput({
  type,
  placeholder,
  required,
  onChange,
  id,
  name,
}: IFormInput) {
  return (
    <input
      id={id}
      name={name}
      className=" border rounded-full p-2 px-3 bg-slate-50"
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
}
