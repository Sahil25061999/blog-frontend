import { IFromHeading } from "../types";

export function FormHeading({ heading }: IFromHeading) {
  return <h1 className=" text-2xl font-bold">{heading}</h1>;
}
