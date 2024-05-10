import { createContext, useContext, useState } from "react";
import { TChildren } from "../types";

interface IUser {
  email: string;
  username: string;
}

const UserContext = createContext<{
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
} | null>(null);

export const UserContextProvider = ({ children }: TChildren) => {
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
