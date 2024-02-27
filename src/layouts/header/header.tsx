import { HeaderWrapper } from "./header.styles";
import { Logo } from "@assets/svgs";

export default function Header() {
  return (
    <HeaderWrapper
      pv="24px"
      ph="32px"
      justify="space-between"
      align="center"
      as="header"
    >
      <Logo width={243} />
      <div>header actions</div>
    </HeaderWrapper>
  );
}
