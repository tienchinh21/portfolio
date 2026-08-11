import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "vi" | "en";

type LanguageState = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: "vi",
      setLang: (lang: Language) => set({ lang }),
      toggleLang: () => set({ lang: get().lang === "vi" ? "en" : "vi" }),
    }),
    {
      name: "portfolio-lang",
    }
  )
);
