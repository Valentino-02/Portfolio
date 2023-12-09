import "server-only";
import type { Locale } from "../../i18n.config";

const dictionaries = {
  en: () => import("@/localization/en.json").then((module) => module.default),
  es: () => import("@/localization/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
