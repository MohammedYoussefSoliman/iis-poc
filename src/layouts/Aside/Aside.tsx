import React from "react";
import { useTheme } from "@emotion/react";
import { SideNavProps } from "../layouts.types";
import { Aside as StyledAside } from "../layouts.styles";
import { NavLink, Flex, Accordion, Icon, P3 } from "@components";

import AsideLabel from "./AsideLabel";

export default function Aside({ navItems }: SideNavProps) {
  const { pallet, colors } = useTheme();

  const [expanded, setExpanded] = React.useState<boolean>(false);

  return (
    <StyledAside p="32px 16px" direction="column">
      <AsideLabel />
      {navItems.map((item) => (
        <React.Fragment key={item.label}>
          <Accordion
            value={item.label}
            onValueChange={(value) => {
              setExpanded(value === item.label);
            }}
            trigger={
              <Flex p="8px" align="center" justify="space-between" fullWidth>
                <Flex align="center" gap="8px">
                  <Icon
                    name={item.icon}
                    color={expanded ? pallet.primary[400] : colors.dark[400]}
                  />
                  <P3 text={item.label} color={colors.dark[400]} weight={500} />
                </Flex>
                <Icon name="chevron-down" className="AccordionChevron" />
              </Flex>
            }
          >
            <Flex direction="column" fullWidth>
              {item.items.map((link) => (
                <NavLink key={link.label} to={link.path} label={link.label} />
              ))}
            </Flex>
          </Accordion>
        </React.Fragment>
      ))}
    </StyledAside>
  );
}
