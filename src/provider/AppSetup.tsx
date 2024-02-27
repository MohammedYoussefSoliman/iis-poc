import React from "react";
import i18next from "i18next";
import { HelmetProvider } from "react-helmet-async";

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import routes from "@modules/routes";
import { useAppSelector, useAppDispatch, useAppRoutes } from "@hooks";
import { getTheme } from "@theme";
import { GlobalStyles, FontStyles } from "@styles";

export default function Provider() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("app");
  const {
    ui: { language },
  } = useAppSelector((state) => state);

  const router = useAppRoutes({ layout: "normal", routes });

  React.useEffect(() => {
    i18next.changeLanguage(language);
  }, [dispatch, language]);

  return (
    <HelmetProvider>
      <ThemeProvider theme={getTheme()}>
        <Helmet
          title={t("appTitle")}
          htmlAttributes={{
            lang: language,
            dir: language === "en" ? "ltr" : "rtl",
          }}
          bodyAttributes={{
            lang: language,
            dir: language === "en" ? "ltr" : "rtl",
          }}
        ></Helmet>
        <FontStyles />
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
