import React, { FC } from "react";
import classNames from "classnames";
import {usePlatformContext} from "../../../platform";

export const Layout: FC = (props) => {
  const { isMobile } = usePlatformContext();
  return <div   className={classNames( "main center",{
    "pt5 mt5 mt4-l": !isMobile,
    "pt5 mt2": isMobile,
  })}>

    {props.children}


  </div>;
};
