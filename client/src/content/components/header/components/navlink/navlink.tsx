import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { usePlatformContext } from "../../../../../platform";
import { LOCATIONS } from "../../../../../router";

interface NavlinkProps {
  link: {
    name: string;
    href: LOCATIONS;
  };
  onClick?: () => void;
}

export const Navlink: FC<NavlinkProps> = ({
  link: { name, href },
  onClick,
}) => {
  const { isMobile } = usePlatformContext();
  return (
    <li>
      <Link
        className={classNames("link dim f5-l dib mh2 ml4-l mr0-l fw6", {
          "f5 white ttc": !isMobile,
          "mv2 f3 black ttu tracked": isMobile,
        })}
        to={href}
        title="Home"
        onClick={onClick}
      >
        {name}
      </Link>
    </li>
  );
};
