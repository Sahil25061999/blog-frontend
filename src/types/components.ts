import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface IFormLabel {
  htmlFor: string;
  label: string;
}

export interface IFormInput {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  id: string;
  name: string;
  value?: string;
  error?: string | null;
}

export interface IFromHeading {
  heading: string;
}

export interface IFormFooter {
  footerText: string;
  link: string;
  linkText: string;
}

export interface IText {
  children: React.ReactNode;
  classname?: React.HTMLAttributes<string> | string;
}

export interface IBlogCard {
  id: string;
  author: string;
  title: string;
  content: string;
}
