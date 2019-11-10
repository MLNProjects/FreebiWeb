import React from "react";
import "./menu.css";
import { useStateValue } from "../../utilities/StateManagement/stateManagement";
import { Link } from "react-router-dom";

const Menu = () => {
  const [{ menu }, dispatch] = useStateValue();

  const closeMenu = () => {
    dispatch({
      type: "toggleMenu",
      menu: { toggle: false }
    });
  };

  return (
    <div className={menu.toggle ? "overlay active-nav" : "overlay"}>
      <div className="overlay-content">
        <Link onClick={closeMenu} to="/">
          Home
        </Link>
        <Link onClick={closeMenu} to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Menu;
