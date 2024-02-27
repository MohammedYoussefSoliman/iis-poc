type ThemeObjectType = {
  [key: number]: string;
};

export type ColorsType = {
  [key: string]: ThemeObjectType;
};

export type ColorsPalletType = {
  primary: ThemeObjectType;
  secondary: ThemeObjectType;
  text: {
    [key: string]: string;
  };
};

export interface ThemeType {
  colors: ColorsType;
  pallet: ColorsPalletType;
  font: string;
  shadows: ThemeObjectType;
  fonts: {
    [key: string]: string;
  };
}
