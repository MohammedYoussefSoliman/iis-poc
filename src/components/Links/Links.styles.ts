import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Flex } from "@components";

type NavLinkWrapperType = {
  isActive: boolean;
};

export const NavLinkWrapper = styled(Flex)<NavLinkWrapperType>(
  ({ theme: { colors, pallet }, isActive }) => css`
    label: navLink-wrapper;
    background-color: ${isActive ? pallet.primary[500] : colors.shades[100]};
    border-radius: 15px;
  `
);
