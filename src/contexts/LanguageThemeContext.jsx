import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { languageData } from "../content/langmockdata.js";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../hooks/localstoragehelper.js";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LanguageThemeContext = createContext();

export const LanguageThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromLocalStorage("theme") || "light");
  const [language, setLanguage] = useState(
    getFromLocalStorage("language") || "tr"
  );
  const [texts, setTexts] = useState(languageData[language]);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    saveToLocalStorage("theme", theme === "light" ? "dark" : "light");
    toast.success("Theme updated successfully!");
  }

  function changeLang(lang) {
    setLanguage(lang);
    saveToLocalStorage("language", lang);
    toast.success("Language updated successfully!");

    const data =
      lang === "EN"
        ? { language: languageData.en }
        : { language: languageData.tr };
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((response) => {
        console.log("Dil başarıyla gönderildi:", response.data);
      })
      .catch((error) => {
        console.error("Dil değiştirme sırasında hata oluştu:", error);
      });
  }

  useEffect(() => {
    setTexts(languageData[language]);
  }, [language]);

  return (
    <LanguageThemeContext.Provider
      value={{ theme, toggleTheme, language, changeLang, texts }}
    >
      {children}
    </LanguageThemeContext.Provider>
  );
};

//context hooku
export const useLanguageTheme = () => useContext(LanguageThemeContext);
