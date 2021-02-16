import React from "react";
import { usePlatformContext } from "../../../../../platform";
import { DesktopNavbar } from "./desktop";
import { MobileNavbar } from "./mobile";

export const Navbar = () => {
    const { isMobile } = usePlatformContext();

    return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
