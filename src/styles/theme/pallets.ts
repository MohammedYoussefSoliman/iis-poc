import * as colors from "./colors";
import { ColorsPalletType } from "./theme.types";

export type ColorType = keyof typeof colors;

export type GeneratePalletArgs = {
  primary?: ColorType;
  secondary?: ColorType;
};

export const generatePallet = ({
  primary,
  secondary,
}: GeneratePalletArgs): ColorsPalletType => {
  return {
    primary: colors[primary || "paleGreen"],
    secondary: colors[secondary || "marron"],
    text: {
      heading: colors.dark[900],
      body: colors.dark[700],
      error: colors.dark[300],
      success: colors.dark[500],
      warning: colors.dark[700],
      white: "#ffffff",
    },
  };
};
