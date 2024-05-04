import { IFormLabel } from "../types";

export function FormLabel({ htmlFor, label }: IFormLabel) {
  return (
    <label className=" block text-sm" htmlFor={htmlFor}>
      {label}
    </label>
  );
}
