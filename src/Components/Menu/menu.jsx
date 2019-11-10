import React from "react";
import "./menu.css";
import { useStateValue } from "../../utilities/StateManagement/stateManagement";

const Menu = () => {
  const [{ menu }] = useStateValue();

  return (
    <div className={menu.toggle ? "overlay active-nav" : "overlay"}>
      <div className="overlay-content">
        <a href="./">Home</a>
        <a href="./">Profile</a>
        <a href="./">Freebee</a>
        <a href="./">About us</a>
      </div>
    </div>
  );
};

export default Menu;
