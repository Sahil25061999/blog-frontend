import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { BlogCreateContextProvider } from "./context/blogCreate.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <BlogCreateContextProvider>
        <App />
      </BlogCreateContextProvider>
    </Router>
  </React.StrictMode>
);
