import "@emotion/react";
import { ThemeType } from "@theme/theme.types";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
