import { useLanguage } from "@/store/use-language";
import { vi } from "./dictionaries/vi";
import { en } from "./dictionaries/en";

const dictionaries = {
  vi,
  en,
};

export const useTranslation = () => {
  const { lang, setLang, toggleLang } = useLanguage();
  const t = dictionaries[lang] || dictionaries.vi;

  return {
    t,
    lang,
    setLang,
    toggleLang,
  };
};
