import { useEffect, useMemo, useState } from 'react';
import { translations } from './translations';
import { LanguageContext } from './LanguageContextValue';
const STORAGE_KEY = 'namibar_lang';

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'hu';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const t = (path) => getByPath(translations[lang], path) ?? path;
    return {
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'hu' : 'en')),
      t,
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
