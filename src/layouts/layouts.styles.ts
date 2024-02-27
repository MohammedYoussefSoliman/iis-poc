import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Flex } from "@components";

export const Wrapper = styled.div`
  label: layout-wrapper;
  display: flex;
  flex-direction: column;
  width: 100%;
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;
  }
  &.empty {
    min-height: auto;
    height: 100vh;
    overflow: hidden;
  }
`;

export const Aside = styled(Flex)(
  ({ theme: { colors } }) => css`
    label: aside-wrapper;
    background-color: ${colors.shades[100]};
    width: 240px;
  `
);
