import OpenSans from "@assets/fonts/open-sans";
import IBMPlexSans from "@assets/fonts/IBMPlex-sans-arabic";

import { ThemeType } from "./theme.types";
import { GeneratePalletArgs, generatePallet } from "./pallets";
import * as colors from "./colors";
import { shadows } from "./shadows";

export const getTheme = (
  palletColors: GeneratePalletArgs = {},
  locale: "ar" | "en" = "ar"
): ThemeType => {
  return {
    colors,
    shadows,
    pallet: generatePallet({
      primary: palletColors.primary,
      secondary: palletColors.primary,
    }),
    fonts: {
      arabic: IBMPlexSans.name,
      english: OpenSans.name,
    },
    font: locale === "ar" ? IBMPlexSans.name : OpenSans.name,
  };
};
