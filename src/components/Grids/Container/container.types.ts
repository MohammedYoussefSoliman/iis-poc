import { ResponsiveSettings } from "@styles/styles.types";

export type ConfigWidth =
  | "normal"
  | "medium"
  | "wide"
  | "extraWide"
  | "fullWidth";

export type ContainerConfig = {
  [key in ConfigWidth]: ResponsiveSettings;
};
