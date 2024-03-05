import { P1, Flex, Accordion, Icon } from "@components";

import { AccordionTrigger, AccordionContent } from "./homePage.styles";

export default function HomePage() {
  return (
    <Flex direction="column" p="16px">
      <P1 text="dashboard" />
      <Accordion
        value="dashboard-item"
        trigger={
          <AccordionTrigger
            align="center"
            justify="space-between"
            width="400px"
            p="10px"
          >
            This is trigger
            <Icon name="chevron-down" className="AccordionChevron" />
          </AccordionTrigger>
        }
      >
        <AccordionContent gap={8} direction="column" fullWidth>
          <Flex p={8}>This is content 1</Flex>
          <Flex p={8}>This is content 1</Flex>
          <Flex p={8}>This is content 1</Flex>
          <Flex p={8}>This is content 1</Flex>
          <Flex p={8}>This is content 1</Flex>
        </AccordionContent>
      </Accordion>
    </Flex>
  );
}
