import i18n from "@locales/i18n";
import { ar as homeAr } from "@modules/home/locales";
import { ar as aboutAr } from "@modules/about/locales";

i18n.addResourceBundle("ar", "app", {
  welcome: "اهلاً وسهلاً",
  ...homeAr,
  ...aboutAr,
});
