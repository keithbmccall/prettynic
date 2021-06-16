import { usePlatformContext } from "./platform";

export const useIsDarkMode = () => {
  return usePlatformContext()?.isDarkMode;
};
