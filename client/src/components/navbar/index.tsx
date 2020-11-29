import React from "react";
import { Navlink } from "./navlink";
import { Navlogo } from "./navlogo";

export const Navbar = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l fixed bg-black top-0 left-0">
      <Navlogo />
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Navlink> Home</Navlink>
        <Navlink>Second</Navlink>
        <Navlink> Third</Navlink>
        <Navlink> Contact</Navlink>
      </div>
    </nav>
  );
};
