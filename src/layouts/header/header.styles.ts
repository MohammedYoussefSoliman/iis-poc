import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Flex } from "@components";

export const HeaderWrapper = styled(Flex)(
  ({ theme: { colors } }) => css`
    label: header-wrapper;
    height: 96px;
    width: 100%;
    background-color: ${colors.shades[100]};
  `
);
