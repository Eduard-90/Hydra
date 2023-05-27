import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        ABOUT
      </a>
      <a className="menu-item" href="/salads">
        SERVICES
      </a>
      <a className="menu-item" href="/pizzas">
        TECHNOLOGIES
      </a>
      <a className="menu-item" href="/desserts">
        HOW TO
      </a>
    </Menu>
  );
};
