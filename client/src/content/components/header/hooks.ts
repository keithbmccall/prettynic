import { useCallback, useState } from "react";

export const useNavbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = useCallback(
    () => setNavbarOpen(!isNavbarOpen),
    [isNavbarOpen]
  );

  const openNavbar = useCallback(() => setNavbarOpen(true), []);

  const closeNavbar = useCallback(() => setNavbarOpen(false), []);

  return {
    closeNavbar,
    isNavbarOpen,
    openNavbar,
    toggleNavbar,
  };
};
