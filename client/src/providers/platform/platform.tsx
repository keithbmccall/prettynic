import {createContext, FC, useContext, useState} from "react";

type PlatformContextType = {
  isMobile: boolean;
  isDarkMode: boolean;
};

const PlatformContext = createContext<PlatformContextType>({
  isMobile: true,
  isDarkMode: true,
});

export const usePlatformContext = () => useContext(PlatformContext);

const getIsMobile = (force?: boolean) =>
  !force &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export const PlatformContextProvider: FC = ({ children }) => {
  const [isMobile] = useState(getIsMobile());
  const [isDarkMode] = useState(true);

  return (
    <PlatformContext.Provider value={{ isMobile, isDarkMode }}>
      {children}
    </PlatformContext.Provider>
  );
};
