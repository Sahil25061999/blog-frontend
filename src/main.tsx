import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { BlogCreateContextProvider } from "./context/blogCreate.tsx";
import { AuthProvider } from "./context/auth.tsx";
import { UserContextProvider } from "./context/user.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <UserContextProvider>
        <Router>
          <BlogCreateContextProvider>
            <App />
          </BlogCreateContextProvider>
        </Router>
      </UserContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
