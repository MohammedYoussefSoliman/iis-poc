import { css } from "@emotion/react";
import { screens } from "@styles";
import { ConfigWidth } from "./container.types";
import config from "./config";

const manageContainerConfig = (width: ConfigWidth) => {
  const containerConfig = config[width];
  const keys = Object.keys(containerConfig) as Array<
    keyof typeof containerConfig
  >;

  let stylesObject = {};

  keys.forEach((key) => {
    stylesObject = {
      ...stylesObject,
      [screens[key]]: {
        maxWidth: containerConfig[key],
      },
    };
  });

  return css(stylesObject);
};

export default manageContainerConfig;
