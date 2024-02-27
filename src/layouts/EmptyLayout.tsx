import { Outlet } from "react-router-dom";

import { Wrapper } from "./layouts.styles";

export default function EmptyLayout() {
  return (
    <Wrapper className="empty">
      <Outlet />
    </Wrapper>
  );
}
