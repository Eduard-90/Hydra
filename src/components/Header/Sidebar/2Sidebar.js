import React, { useState } from "react";

import "./Sidebar.scss";

export const Sidebar = () => {
  const [isOpen, setOpen] = useState();

  return (
    <header>
      <nav className={`header__nav ${isOpen ? "active" : ""}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item">ABOUT</li>
          <li className="header__nav-item">SERVICES</li>
          <li className="header__nav-item">TECHNOLOGIES</li>
          <li className="header__nav-item">HOW TO</li>
        </ul>
      </nav>
      <button
        className="header__menu-button"
        onClick={() => setOpen(!isOpen)}
      ></button>
    </header>
  );
};
