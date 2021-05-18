import { useMemo } from "react";
import { usePlatformContext } from "../../platform";

export const useHeaderHeight = () => {
  const { isMobile } = usePlatformContext();

  const headerHeight = isMobile ? 59 : 82;

  const style = useMemo(
    () => (headerHeight ? { style: { height: `${headerHeight}px` } } : {}),
    [headerHeight]
  );

  return {
    headerHeight,
    style,
  };
};
