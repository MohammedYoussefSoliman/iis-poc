import i18n from "@locales/i18n";
import { en as homeEn } from "@modules/home/locales";
import { en as aboutEn } from "@modules/about/locales";

i18n.addResourceBundle("en", "app", {
  welcome: "welcome",
  ...homeEn,
  ...aboutEn,
});
