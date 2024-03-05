import React from "react";
import { useTheme } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import { P3 } from "@components";
import { NavLinkTypeProps } from "../Links.types";
import { NavLinkWrapper } from "../Links.styles";

export default function NavigationLink({
  to,
  label,
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
          p="10px 40px"
          isActive={isActive}
        >
          <P3
            textDecoration={isActive ? "underline" : undefined}
            color={isActive ? pallet.text.white : pallet.text.body}
            capitalizeFirstLetter
            text={label}
          />
        </NavLinkWrapper>
      )}
    </NavLink>
  );
}
