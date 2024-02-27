import { RouteObject } from "react-router-dom";

export const route: RouteObject = {
  index: true,
  lazy: async () => {
    const Page = await import("./homePage");
    return { Component: Page.default };
  },
};
