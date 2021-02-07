import React, { createContext, FC, useContext, useState } from "react";

type PlatformContextType = {
  isMobile: boolean;
};

const InitialPlatformContext: PlatformContextType = {
  isMobile: true,
};

const PlatformContext = createContext<PlatformContextType>(
  InitialPlatformContext
);

export const usePlatformContext = () => useContext(PlatformContext);

const getIsMobile = (force?: boolean) =>
  !force &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export const PlatformContextProvider: FC = ({ children }) => {
  const [isMobile] = useState(getIsMobile());
  return (
    <PlatformContext.Provider value={{ isMobile }}>
      {children}
    </PlatformContext.Provider>
  );
};
