import React, { FC, useEffect } from "react";
import { scrollToTop } from "../../utils";

export const Page: FC = ({ children }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className={"pt3 flex flex-column w-100 items-center"}>{children}</div>
  );
};
