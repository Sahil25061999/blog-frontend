import { FieldValues, UseControllerProps, useController } from "react-hook-form";
import { IFormInput } from "../types/components";

export function FormInput<T extends FieldValues>(
  props: UseControllerProps<T> & IFormInput
) {
  const { field } = useController(props);

  return (
    <>
      <input
        {...field}
        id={props.id}
        // name={props.name}
        className={` border outline-none focus:border-stone-900 rounded-full p-2 px-3 bg-slate-50 ${props.error ? " border-red-500" : ""}`}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        // onChange={onChange}
        // value={value}
      />
      {props.error && <p className={` text-xs mt-2 text-red-500`}>{props.error}</p>}
    </>
  );
}
