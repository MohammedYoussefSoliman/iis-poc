import React from "react";
import { AccordionContentProps } from "@radix-ui/react-accordion";
import { AccordionContent } from "./Accordion.styles";

export const Content = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionContent {...props} ref={forwardedRef}>
      {children}
    </AccordionContent>
  )
);
