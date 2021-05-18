import React, { FC, useEffect } from "react";
import { scrollToTop } from "../../utils";
import classNames from "classnames";

interface PageProps {
  flush?: boolean;
}

export const Page: FC<PageProps> = ({ children, flush }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div
      className={classNames("flex flex-column w-100 items-center", {
        pt3: !flush,
      })}
    >
      {children}
    </div>
  );
};
