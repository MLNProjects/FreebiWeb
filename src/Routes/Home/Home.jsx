import React, { useCallback } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="title-wrapper">
        <div className="icon-wrapper">
          <div className="icon-placeholder"></div>
        </div>
        <div>
          <h2 className="title">
            Organize searches for missing people. Join an operation and see
            where people have searched
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
