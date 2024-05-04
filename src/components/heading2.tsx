import { IText } from "../types";

export function Heading2({ children, classname="" }:IText) {
  return <h2 className={`text-2xl font-medium ${classname}`}>{children}</h2>;
}
