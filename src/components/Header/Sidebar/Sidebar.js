import React, { useState, useCallback } from "react";
import { stack as Menu } from "react-burger-menu";

import "./Sidebar.scss";

export const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <Menu
      right
      width={"100%"}
      isOpen={menuOpen}
      onStateChange={handleStateChange}
    >
      <a className="menu-item" href="#about" onClick={closeMenu}>
        ABOUT
      </a>
      <a className="menu-item" href="#services" onClick={closeMenu}>
        SERVICES
      </a>
      <a className="menu-item" href="#technologies" onClick={closeMenu}>
        TECHNOLOGIES
      </a>
      <a className="menu-item" href="#how" onClick={closeMenu}>
        HOW TO
      </a>
    </Menu>
  );
};
