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
            <Icon name="chevron-up" className="AccordionChevron" />
          </AccordionTrigger>
        }
      >
        <AccordionContent direction="column" fullWidth>
          <Flex>This is content 1</Flex>
          <Flex>This is content 1</Flex>
          <Flex>This is content 1</Flex>
          <Flex>This is content 1</Flex>
          <Flex>This is content 1</Flex>
        </AccordionContent>
      </Accordion>
    </Flex>
  );
}
