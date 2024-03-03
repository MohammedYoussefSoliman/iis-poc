import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import * as Accordion from "@radix-ui/react-accordion";

const slideDown = keyframes`
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  
  `;

const slideUp = keyframes`
  from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  `;

export const AccordionItem = styled(Accordion.Item)(
  () => css`
    overflow: hidden;
  `
);

export const AccordionHeader = styled(Accordion.Header)(
  () => css`
    display: flex;
  `
);

export const AccordionTrigger = styled(Accordion.Trigger)(
  () => css`
    width: 100%;
    border: none;
    background: unset;
    .AccordionChevron {
      transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
    &[data-state="open"] {
      .AccordionChevron {
        transform: rotate(180deg);
      }
    }
  `
);

export const AccordionContent = styled(Accordion.Content)(
  () => css`
    width: 100%;
    &[data-state="open"] {
      animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
    &[data-state="closed"] {
      animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
  `
);
