import React from "react";
import { IconName } from "@components";

export type LayoutProps = {
  children: React.ReactNode;
};

export type MenuItem = {
  path: string;
  label: string;
};

export type SideMenu = {
  label: string;
  icon: IconName;
  items: MenuItem[];
};

export type SideNavProps = {
  navItems: SideMenu[];
};
