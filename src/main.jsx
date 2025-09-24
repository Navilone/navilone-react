import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/style.css"; // ton CSS global
import { LanguageProvider } from "./context/LanguageContext"; // si tu utilises ton système de traduction

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>
);
