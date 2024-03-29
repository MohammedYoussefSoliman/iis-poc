import { css } from "@emotion/react";
import { screens } from "@styles";
import CSS, { Property } from "csstype";
import {
  SpacingProperties,
  SpacingType,
  Spacing,
  SpacingProperty,
  ResponsiveSpacingType,
  DirectionType,
} from "./flex.types";
import StyleFactory from "./styleFactory";

export const { styleFactory: widthResponsiveStyle } = new StyleFactory("width");
export const { styleFactory: heightResponsiveStyle } = new StyleFactory(
  "height"
);
export const { styleFactory: directionResponsiveStyle } = new StyleFactory(
  "flexDirection"
);
export const { styleFactory: flexResponsiveStyle } = new StyleFactory("flex");
export const { styleFactory: alignResponsiveStyle } = new StyleFactory(
  "alignItems"
);
export const { styleFactory: justifyResponsiveStyle } = new StyleFactory(
  "justifyContent"
);
export const { styleFactory: maxWidthResponsiveStyle } = new StyleFactory(
  "maxWidth"
);
export const { styleFactory: gapResponsiveStyle } = new StyleFactory("gap");

export const flexGapCalculator = (
  gap: number | CSS.Property.Gap,
  direction: DirectionType = "row"
) => {
  // This function calculates the gap between flex container children incase the flex gap property is not supported in old browsers
  let cssGap: CSS.Property.Gap;
  if (typeof gap === "number") {
    cssGap = `${gap}px`;
  } else {
    cssGap = gap;
  }
  let gapStyleProperties;
  if (direction === "row") {
    gapStyleProperties = css`
      margin: 0 calc(${cssGap} / 2);
      &:first-of-type {
        &:lang(en) {
          margin-left: 0;
        }
        &:lang(ar) {
          margin-right: 0;
        }
      }
      &:last-child {
        &:lang(ar) {
          margin-left: 0;
        }
        &:lang(en) {
          margin-right: 0;
        }
      }
    `;
  } else {
    gapStyleProperties = css`
      margin: calc(${cssGap} / 2) 0;
      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    `;
  }

  return gapStyleProperties;
};

export const calculateFlexGap = (
  gap: number | Property.Gap,
  persistedGap: boolean = false
) => {
  let cssGap: string;
  if (typeof gap === "number") {
    cssGap = `${gap}px`;
  } else {
    cssGap = gap;
  }

  if (!persistedGap) {
    return css`
      gap: calc(${cssGap} * 0.2);
      ${screens.sm} {
        gap: calc(${cssGap} * 0.4);
      }
      ${screens.md} {
        gap: calc(${cssGap} * 0.6);
      }
      ${screens.xl} {
        gap: calc(${cssGap} * 0.8);
      }
      ${screens.xxl} {
        gap: ${cssGap};
      }
    `;
  }

  return css`
    gap: ${cssGap};
  `;
};

const calculateResponsiveSpacing = (
  key: Spacing,
  value: ResponsiveSpacingType
) => {
  let responsiveSettings = {};
  const mediaQueries = Object.keys(value) as (keyof typeof screens)[];
  mediaQueries.forEach((q) => {
    if (value[q]) {
      responsiveSettings = {
        [SpacingProperties[key]]: value.xs,
        ...responsiveSettings,
        [screens[q]]: {
          [SpacingProperties[key]]: `${
            typeof value[q] === "number" ? `${value[q]}px` : value[q]
          }  !important`,
        },
      };
    }
  });
  return responsiveSettings;
};

export const calculateSpacing = (key: Spacing, value?: SpacingProperty) => {
  if (!value) return {};
  const property = SpacingProperties[key];
  let cssValue: string;

  if (typeof value === "number") {
    cssValue = `${value}px`;
    return {
      [property]: cssValue,
    };
  }
  if (typeof value === "string") {
    cssValue = value;
    return {
      [property]: cssValue,
    };
  }
  return calculateResponsiveSpacing(key, value);
};

export const resolveSpacing = ({ ...props }: SpacingType) => {
  const properties = Object.keys(props) as Spacing[];
  let allProperties = {};
  properties.forEach((property) => {
    if (props[property]) {
      allProperties = {
        ...allProperties,
        ...calculateSpacing(property, props[property]),
      };
    }
  });
  return css(allProperties);
};
