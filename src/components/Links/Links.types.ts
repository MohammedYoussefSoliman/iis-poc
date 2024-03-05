import React from "react";

export type LinkTypeProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
  callback?: () => void;
  relative?: boolean;
};

export type NavLinkTypeProps = {
  to: string;
  label: string;
  className?: string;
  relative?: boolean;
  hash?: string;
  callback?: () => void;
};
