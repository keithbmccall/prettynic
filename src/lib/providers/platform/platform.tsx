'use client';
import { DC } from '@global-types';
import { createContext, useContext, useState } from 'react';

type PlatformContextType = {
  isMobile: boolean;
  isDarkMode: boolean;
};

const PlatformContext = createContext<PlatformContextType>({
  isMobile: true,
  isDarkMode: false,
});

export const usePlatformContext = () => useContext(PlatformContext);

const getIsMobile = (force?: boolean) => {
  const userAgent = navigator?.userAgent?.toLowerCase();

  const isMobileOrTablet =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );

  const isTablet =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      userAgent,
    );

  return !force && isMobileOrTablet && !isTablet;
};

export const PlatformContextProvider: DC = ({ children }) => {
  const [isMobile] = useState(getIsMobile());
  const [isDarkMode] = useState(false);

  return (
    <PlatformContext.Provider value={{ isMobile, isDarkMode }}>
      {children}
    </PlatformContext.Provider>
  );
};
