import { css } from "@emotion/react";
import isPropValid from "@emotion/is-prop-valid";
import { screens } from "@styles";
import styled from "@emotion/styled";
import manageContainerConfig from "./mixin";
import { ConfigWidth } from "./container.types";

type StyledContainerType = {
  width: ConfigWidth;
};

const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && !["width"].includes(prop);

const Wrapper = styled("div", { shouldForwardProp })<StyledContainerType>`
  ${css`
    label: container;
  `}
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  padding-right: 12px;
  padding-left: 12px;
  width: 100%;
  ${({ width }) => width && manageContainerConfig(width)}
  ${screens.md} {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

export default Wrapper;
