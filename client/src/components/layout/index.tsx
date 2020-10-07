import React, { FC } from "react";

export const Layout: FC = (props) => {
  return <div className={"debug"}>{props.children}</div>;
};
