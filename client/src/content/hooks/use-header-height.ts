import { useMemo } from "react";
import { usePlatformContext } from "../../providers/platform";

export const useHeaderHeight = () => {
  const { isMobile } = usePlatformContext();

  const headerHeight = isMobile ? 64 : 82;

  const style = useMemo(
    () => (headerHeight ? { style: { height: `${headerHeight}px` } } : {}),
    [headerHeight]
  );

  return {
    headerHeight,
    style,
  };
};
