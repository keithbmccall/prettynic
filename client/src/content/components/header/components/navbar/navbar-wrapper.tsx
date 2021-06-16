
import {usePlatformContext} from "../../../../../providers/platform";
import {DesktopNavbar} from "./desktop";
import {MobileNavbar} from "./mobile";

export const Navbar = () => {
  const { isMobile } = usePlatformContext();

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
