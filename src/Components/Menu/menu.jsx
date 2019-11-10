import React from "react";
import "./menu.css";
import { useStateValue } from "../../utilities/StateManagement/stateManagement";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Menu = () => {
  const [{ menu }] = useStateValue();

  return (
    <div className={menu.toggle ? "overlay active-nav" : "overlay"}>
      <div className="overlay-content">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Menu;
