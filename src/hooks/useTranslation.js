import { useState, useCallback } from "react";
import en from "../data/translations/en.json";
import es from "../data/translations/es.json";
import pt from "../data/translations/pt.json";

const TRANSLATIONS = { en, es, pt };

const resolve = (obj, path) =>
  path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);

export const useTranslation = () => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("zara_lang");
    if (saved && TRANSLATIONS[saved]) return saved;
    const browser = navigator.language?.slice(0, 2);
    return TRANSLATIONS[browser] ? browser : "en";
  });

  const t = useCallback(
    (key) => {
      const val = resolve(TRANSLATIONS[lang] || TRANSLATIONS.en, key);
      if (val === null) return key;
      return val;
    },
    [lang]
  );

  const changeLang = useCallback((l) => {
    if (!TRANSLATIONS[l]) return;
    setLang(l);
    localStorage.setItem("zara_lang", l);
  }, []);

  return { t, lang, changeLang, langs: Object.keys(TRANSLATIONS) };
};
