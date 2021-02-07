import React from "react";
import { Navlogo } from "./navlogo";
import { NavLinkWrapper } from "./navlinkwrapper";

export const DesktopNavbar = () => {
  return (
    <nav className="w-100 pa3 ph5-l fixed bg-black top-0 left-0 flex items-center justify-center flex-column flex-row-l justify-between-l">
      <Navlogo />
      <NavLinkWrapper />
    </nav>
  );
};
