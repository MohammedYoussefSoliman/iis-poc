import React from "react";
import Wrapper from "./container.styles";
import { ConfigWidth } from "./container.types";

interface ContainerPropType {
  width?: ConfigWidth;
  children: React.ReactNode;
}

export default function Container({
  width = "wide",
  children,
}: ContainerPropType) {
  return <Wrapper width={width}>{children}</Wrapper>;
}
