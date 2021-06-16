import { usePlatformContext } from "@providers";
import { DesktopNavbar } from "./desktop";
import { MobileNavbar } from "./mobile";

export const Navbar = () => {
  const { isMobile } = usePlatformContext();

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
