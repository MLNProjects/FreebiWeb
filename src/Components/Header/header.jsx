import React from "react";
import Nav from "../Nav/nav";
import UserAuth from "../UserAuth/userAuth";
import Menu from "../Menu/menu";
import Login from "../Login/login";

import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <Nav />
        <h1 className="company-title">Freebee</h1>
        <UserAuth />
      </div>
      <Menu />
      <Login />
    </div>
  );
};

export default Header;
