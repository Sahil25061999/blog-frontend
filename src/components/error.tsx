import { IError } from "../types";

export function Error({ message, classname }:IError) {
  return <p className={`mt-2  text-xs text-red-500 ${classname}`}>{message}</p>;
}
