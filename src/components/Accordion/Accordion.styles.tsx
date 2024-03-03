import { css } from "@emotion/react";
import styled from "@emotion/styled";

import * as Accordion from "@radix-ui/react-accordion";

export const AccordionRoot = styled(Accordion.Root)(
  ({ theme: { colors } }) => css`
    background-color: ${colors.shades[500]};
  `
);

export const AccordionItem = styled(Accordion.Item)(
  () => css`
    overflow: hidden;
    /* margin-top: 1px; */
    &:focus-within {
      box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.3);
    }
  `
);
