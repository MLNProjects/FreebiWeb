import React from "react";
import "./nav.css";
import { useStateValue } from "../../utilities/StateManagement/stateManagement";

const Nav = () => {
  const [{ menu }, dispatch] = useStateValue();

  return (
    <div
      onClick={() => {
        dispatch({
          type: "toggleMenu",
          menu: { toggle: !menu.toggle }
        });
        dispatch({
          type: "toggleLogin",
          login: { toggle: false }
        });
      }}
      className={menu.toggle ? "change nav-wrapper" : "nav-wrapper"}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default Nav;
