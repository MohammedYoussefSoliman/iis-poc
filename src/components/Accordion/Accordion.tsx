import React from "react";
import { AccordionSingleProps, Root } from "@radix-ui/react-accordion";

import { AccordionItem } from "./Accordion.styles";

import { Trigger } from "./Trigger";
import { Content } from "./Content";

interface AccordionProps extends Omit<AccordionSingleProps, "type"> {
  trigger: React.ReactNode;
  children: React.ReactNode;
  value: string;
  className?: string;
}

export default function Accordion({
  trigger,
  value,
  children,
  className,
  ...props
}: AccordionProps) {
  return (
    <Root type="single" collapsible {...props}>
      <AccordionItem className={className} value={value}>
        <Trigger>{trigger}</Trigger>
        <Content>{children}</Content>
      </AccordionItem>
    </Root>
  );
}
