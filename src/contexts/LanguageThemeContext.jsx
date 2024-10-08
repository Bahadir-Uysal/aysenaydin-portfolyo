import React, { createContext, useState, useContext } from "react";

const LanguageThemeContext = createContext();

export const LanguageThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const [language, setLanguage] = useState("en");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function changeLang(lang) {
    setLanguage(lang);
  }

  return (
    <LanguageThemeContext.Provider
      value={{ theme, toggleTheme, language, changeLang }}
    >
      {children}
    </LanguageThemeContext.Provider>
  );
};

//context hooku
export const useLanguageTheme = () => useContext(LanguageThemeContext);
