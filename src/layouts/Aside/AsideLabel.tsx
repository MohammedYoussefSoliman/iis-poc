import React from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Flex, P3, Icon } from "@components";
import { navigationItems } from "@utils/helpers";

export default function AsideLabel() {
  const location = useLocation();
  const { colors } = useTheme();

  const currentRoute = React.useMemo(
    () =>
      navigationItems.find((item) => {
        console.log(location.pathname);
        if (location.pathname === "/") {
          return item.path === location.pathname;
        }
        const purePath = location.pathname.replace("/", "");
        return item.path.includes(purePath);
      }),
    [location.pathname]
  );

  if (!currentRoute) return null;

  return (
    <Flex gap="8px" p="8px" align="center">
      <Icon name={currentRoute.icon} color={colors.dark[400]} />
      <P3 text={currentRoute.label} color={colors.dark[400]} />
    </Flex>
  );
}
