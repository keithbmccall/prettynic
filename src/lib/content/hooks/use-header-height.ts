import { usePlatformContext } from '@providers';
import { useMemo } from 'react';

export const useHeaderHeight = () => {
  const { isMobile } = usePlatformContext();

  const headerHeight = isMobile ? 64 : 82;

  const style = useMemo(
    () => (headerHeight ? { style: { height: `${headerHeight}px` } } : {}),
    [headerHeight],
  );

  return {
    headerHeight,
    style,
  };
};
