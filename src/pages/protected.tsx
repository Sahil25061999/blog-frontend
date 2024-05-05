import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";
import { TChildren } from "../types";

export function Protected({ children }: TChildren) {
  const path = useLocation();
  const { token } = useAuth()!;
  console.log("TOKEN==>",token,path)
  if (token) {
    return <>{children}</>;
  }
  return <Navigate to={"/signin"} state={{ from: path.pathname }} />;
}
