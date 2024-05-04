import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface IFormLabel {
  htmlFor: string;
  label: string;
}

export interface IFormInput {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
  name: string;
}
