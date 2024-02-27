import React from "react";
import { useTheme } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import { P2 } from "@components";
import { NavLinkTypeProps } from "../Links.types";
import { NavLinkWrapper } from "../Links.styles";

export default function NavigationLink({
  to,
  children,
  hash,
  callback,
}: NavLinkTypeProps) {
  const { pathname } = useLocation();
  const { pallet } = useTheme();

  const navToSection = React.useCallback(() => {
    if (hash) {
      if (pathname === to) {
        window.location.href = hash;
      } else {
        setTimeout(() => {
          window.location.href = hash;
        }, 1000);
      }
    }
  }, [hash, to, pathname]);

  return (
    <NavLink
      onClick={() => {
        navToSection();

        if (callback) {
          setTimeout(callback, 0);
        }
      }}
      to={to}
    >
      {({ isActive }) => (
        <NavLinkWrapper
          fullWidth
          align="center"
          justify="center"
          p="10px"
          isActive={isActive}
        >
          <P2
            hover={{
              decoration: "underline",
            }}
            textDecoration={isActive ? "underline" : undefined}
            color={isActive ? pallet.text.white : pallet.text.body}
            capitalizeFirstLetter
            weight={500}
          >
            {children}
          </P2>
        </NavLinkWrapper>
      )}
    </NavLink>
  );
}
