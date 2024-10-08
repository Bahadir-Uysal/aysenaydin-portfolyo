import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LanguageThemeProvider } from "./contexts/LanguageThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageThemeProvider>
      <App />
    </LanguageThemeProvider>
  </StrictMode>
);
