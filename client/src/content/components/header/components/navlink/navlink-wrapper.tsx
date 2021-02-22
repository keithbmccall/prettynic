import React, { FC } from "react";
import classNames from "classnames";
import { usePlatformContext } from "../../../../../platform";
import { navlinks } from "../../../../../data/links";
import { Navlink } from "./navlink";

interface NavlinkWrapperProps {
  onClick?: () => void;
}
export const NavlinkWrapper: FC<NavlinkWrapperProps> = ({ onClick }) => {
  const { isMobile } = usePlatformContext();

  return (
    <ul
      className={classNames("list pa0 flex", {
        "justify-center ": !isMobile,
        "flex-column tc w-100 pl0": isMobile,
      })}
      onClick={onClick}
    >
      {navlinks.map((link) => (
        <Navlink
          key={`${link.name}_${link.href}`}
          link={link}
          onClick={() => isMobile && onClick?.()}
        />
      ))}
    </ul>
  );
};
