import React from "react";
import "./nav.css";

const Nav = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);

  return (
    <div
      onClick={() => setMenuToggle(!menuToggle)}
      className={menuToggle ? "change nav-wrapper" : "nav-wrapper"}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default Nav;
