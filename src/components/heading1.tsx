import { IText } from "../types";

export function Heading1({ children, classname }: IText) {
  return (
    <div className={` text-3xl font-semibold ${classname}`}>{children}</div>
  );
}
