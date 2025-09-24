import { createContext, useContext, useState } from "react";
import translations from "../data/translations";

// Création du contexte
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook pour consommer plus facilement
export function useLanguage() {
  return useContext(LanguageContext);
}
