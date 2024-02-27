import { Outlet } from "react-router-dom";

import { Flex } from "@components";

import Header from "./header";

import { Wrapper, Aside } from "./layouts.styles";

export default function NormalLayout() {
  return (
    <Wrapper>
      <main>
        <Header />
        <Flex fullWidth flex={1}>
          <Aside direction="column" pv={32} ph={16} fullHeight>
            aside
          </Aside>
          <Outlet />
        </Flex>
      </main>
    </Wrapper>
  );
}
