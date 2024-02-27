import { Outlet } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

import { Wrapper } from "./layouts.styles";

export default function NormalLayout() {
  return (
    <Wrapper>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </Wrapper>
  );
}
