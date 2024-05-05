import { createContext, useContext, useState } from "react";
import { TChildren } from "../types";

const AuthContext = createContext<{
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const AuthProvider = ({ children }: TChildren) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("blogLoginToken")
  );
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
