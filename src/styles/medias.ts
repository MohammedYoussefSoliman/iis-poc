import { breakpoints } from "./breakpoints";

export const screens = {
  xs: `@media screen and (min-width: ${breakpoints.xs})`,
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
  xxl: `@media screen and (min-width: ${breakpoints.xxl})`,
  hd: `@media screen and (min-width: ${breakpoints.hd})`,
};

export const container = {
  xSmall: `@container (min-width: ${breakpoints.xs})`,
  small: `@container (min-width: ${breakpoints.sm})`,
  medium: `@container (min-width: ${breakpoints.md})`,
  large: `@container (min-width: ${breakpoints.lg})`,
  xLarge: `@container (min-width: ${breakpoints.xl})`,
  xxLarge: `@container (min-width: ${breakpoints.xxl})`,
  hd: `@container (min-width: ${breakpoints.hd})`,
};
