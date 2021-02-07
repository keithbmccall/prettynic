import { useState } from "react";

export const useNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return {
    navbarOpen,
    toggleNavbar,
  };
};
