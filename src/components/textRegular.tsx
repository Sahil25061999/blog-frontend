import { IText } from "../types";

export function TextRegular({ children, classname = "" }: IText) {
  return <p className={`leading-loose ${classname}`}>{children}</p>;
}
