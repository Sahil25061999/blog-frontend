import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { TChildren } from "../types";

export function Public({ children }: TChildren) {
  const { token } = useAuth()!;

  if (!token) {
    return <>{children}</>;
  }

  return <Navigate to={"/blogs"} replace />;
}
