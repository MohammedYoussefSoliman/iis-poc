/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, SerializedStyles } from "@emotion/react";
import { screens } from "@styles";
import { Properties } from "csstype";
import { StyleValue } from "./flex.types";

interface Style {
  styleFactory: <T>(
    value: StyleValue<T>,
    propertyName: keyof Properties
  ) => SerializedStyles;
}

const resolveCSSValue = (value: any | number) => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

export default class StyleFactory implements Style {
  constructor(propertyName: keyof Properties) {
    this.styleFactory = function styling<T = Properties[typeof propertyName]>(
      value: StyleValue<T>
    ) {
      if (typeof value === "number") {
        return css({
          [propertyName]: `${value}px`,
        });
      }
      if (typeof value === "string") {
        return css({
          [propertyName]: value,
        });
      }

      let responsiveSettings = {};
      const mediaQueries = Object.keys(value) as (keyof typeof screens)[];
      mediaQueries.forEach((q) => {
        if (value[q]) {
          responsiveSettings = {
            [propertyName]: resolveCSSValue(value.xs),
            ...responsiveSettings,
            [screens[q]]: {
              [propertyName]: `${resolveCSSValue(value[q])}`,
            },
          };
        }
      });
      return css(responsiveSettings);
    };
  }

  styleFactory;
}
