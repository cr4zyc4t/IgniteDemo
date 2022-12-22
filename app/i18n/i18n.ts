import * as Localization from "expo-localization";
import i18n, { StringMap, TOptionsBase } from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

// if English isn't your default language, move Translations to the appropriate language file.
import ar from "./ar";
import en from "./en";
import ko from "./ko";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3", // react native does not support Intl API
    resources: {
      en,
      ar,
      ko,
    },
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// handle RTL languages
export const isRTL = Localization.isRTL;
I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

export type TXOptions = TOptionsBase & StringMap;
