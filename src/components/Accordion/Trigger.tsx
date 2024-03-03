import React from "react";
import { AccordionTriggerProps } from "@radix-ui/react-accordion";

import { AccordionTrigger, AccordionHeader } from "./Accordion.styles";

export const Trigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <AccordionHeader>
    <AccordionTrigger {...props} ref={forwardedRef}>
      {children}
    </AccordionTrigger>
  </AccordionHeader>
));
