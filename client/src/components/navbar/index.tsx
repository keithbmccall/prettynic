import React from "react";
import {Navlink} from "./navlink";

export const Navbar = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l fixed bg-black" >
      <a
        className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
        href="#"
        title="Home"
      >
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="dib w2 h2 br-100"
          alt="Site Name"
        />
      </a>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Navlink> Home</Navlink>
        <Navlink>Second</Navlink>
        <Navlink> Third</Navlink>
        <Navlink> Contact</Navlink>

      </div>
    </nav>
  );
};
