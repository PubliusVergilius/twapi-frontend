import en from "@/locales/en.json";
import pt from "@/locales/pt.json";

const languages = { en, pt };

export function useTranslation(lang: "pt") {
  return languages[lang];
}
