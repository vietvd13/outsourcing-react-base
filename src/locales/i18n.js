import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import viCommon from "./vi.json";
import enCommon from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    vi: { common: viCommon },
    en: { common: enCommon },
  },
  lng: "vi",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
