import { Link } from "react-router-dom";
import { IFormFooter } from "../types";

export function FormFooter({footerText, link, linkText}:IFormFooter) {
  return (
    <p className=" text-center text-sm">
    {footerText} <span className=" font-medium underline"><Link to={link}>{linkText}</Link></span>
  </p>
  )
}
