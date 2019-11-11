import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="title-wrapper">
        <div className="icon-wrapper">
          <div className="icon-placeholder"></div>
        </div>
        <div className="title-text-wrapper">
          <h2 className="title">
            Organize searches for missing people. <br></br>Join an operation and see
            where people have searched.
          </h2>
        </div>
      </div>
	  <div className="link-wrapper">
		  <Link to="/signin">signin</Link>
		  <Link to="/signup">signup</Link>
	  </div>
    </div>
  );
};

export default Home;
