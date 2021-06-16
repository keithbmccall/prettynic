import { FC, useEffect } from "react";
import { scrollToTop } from "@utils";

interface PageProps {
  flush?: boolean;
}

export const Page: FC<PageProps> = ({ children, flush }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-column w-100 items-center pt5">{children}</div>
  );
};
