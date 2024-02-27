import { RouteObject } from "react-router-dom";

export const route: RouteObject = {
  path: "about",
  lazy: async () => {
    const Page = await import("./aboutPage");
    return { Component: Page.default };
  },
};
