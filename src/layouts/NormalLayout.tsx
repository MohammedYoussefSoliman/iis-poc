import { Outlet } from "react-router-dom";

import { Flex } from "@components";

import Header from "./header";

import { Wrapper } from "./layouts.styles";

import Aside from "./Aside";

export default function NormalLayout() {
  return (
    <Wrapper>
      <main>
        <Header />
        <Flex fullWidth flex={1}>
          <Aside
            navItems={[
              {
                label: "unifiedDocumentManagement",
                icon: "file",
                items: [
                  {
                    label: "fieldsDefinition",
                    path: "/",
                  },
                  {
                    label: "documentsCopies",
                    path: "/about",
                  },
                  {
                    label: "documentCondition",
                    path: "/document-condition",
                  },
                ],
              },
            ]}
          />
          <Outlet />
        </Flex>
      </main>
    </Wrapper>
  );
}
