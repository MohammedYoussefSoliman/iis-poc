import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@hooks";
import StyledText from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

function Text({
  text = "",
  children,
  isHeader,
  noTrans,
  ...rest
}: TypographyProps) {
  const { t } = useTranslation("app");
  const textLength = t(`${text}`).length;
  const {
    ui: { language },
  } = useAppSelector((state) => state);
  const { pallet } = useTheme();

  let content;

  if (children) {
    content = noTrans
      ? children
      : typeof children === "string"
      ? t(children)
      : children;
  } else {
    content = noTrans ? text : t(`${text}`);
  }

  return (
    <StyledText
      length={textLength}
      color={isHeader ? pallet?.text?.heading : pallet?.text?.body}
      isHeader={isHeader}
      capitalizeFirstLetter={isHeader}
      lang={language}
      {...rest}
    >
      {content}
    </StyledText>
  );
}

export default Text;
