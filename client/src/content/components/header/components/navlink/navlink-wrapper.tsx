import React from "react";
import { Navlink } from "./navlink";
import classNames from "classnames";
import { usePlatformContext } from "../../../../../platform";
import { navlinks } from "../../../../../data/links";

export const NavlinkWrapper = () => {
    const { isMobile } = usePlatformContext();

    return (
        <ul
            className={classNames("list pa0 flex", {
                "justify-center ": !isMobile,
                "flex-column tc w-100 pl0": isMobile,
            })}
        >
            {navlinks.map((link) => (
                <Navlink link={link} key={`${link.name}_${link.href}`} />
            ))}
        </ul>
    );
};
