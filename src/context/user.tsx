import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
