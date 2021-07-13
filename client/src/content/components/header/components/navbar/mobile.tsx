import classNames from "classnames";
import { Navlogo } from "../navlogo";
import { useNavbar } from "../../hooks";
import { NavlinkWrapper } from "../navlink";
import { useHeaderHeight } from "../../../../hooks";
import { Hamburger } from "./hamburger";

export const MobileNavbar = () => {
  const { isNavbarOpen, toggleNavbar, closeNavbar } = useNavbar();
  const { style } = useHeaderHeight();

  return (
    <header
      {...style}
      className={classNames("fixed z-max top-0 left-0 w-100 pa2 bg-black", {
        open: isNavbarOpen,
      })}
    >
      <div className="flex relative justify-center w-100">
        <Hamburger onClick={toggleNavbar} />
        <Navlogo />
      </div>

      <nav id="nav" className="absolute w-90 top-0 left-0 vh-100 pa5">
        <NavlinkWrapper onClick={closeNavbar} />
      </nav>
    </header>
  );
};

MobileNavbar.whyDidYouRender = true;
