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

export interface IFromHeading {
  heading: string;
}

export interface IFormFooter {
  footerText: string;
  link: string;
  linkText: string;
}

export interface IText{
  children:React.ReactNode;
  classname?: React.HTMLAttributes<string> | string
}