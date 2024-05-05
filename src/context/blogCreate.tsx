import { createContext, useContext, useState } from "react";
import { TChildren } from "../types";

const BlogCreateContext = createContext<{
  showBlogCreate: boolean;
  toggleBlogCreate: () => void;
} | null>(null);

export const BlogCreateContextProvider = ({ children }: TChildren) => {
  const [showBlogCreate, setShowBlogCreate] = useState(false);

  const toggleBlogCreate = () => setShowBlogCreate((prev) => !prev);

  return (
    <BlogCreateContext.Provider value={{ showBlogCreate, toggleBlogCreate }}>
      {children}
    </BlogCreateContext.Provider>
  );
};

export const useBlogCreate = () => useContext(BlogCreateContext);
