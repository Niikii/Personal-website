import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar ">
      <a>Niki:)</a>

      <div className="navbar-right">
        <a>About</a>
        <a>Skills</a>
        <a>Contact me</a>
      </div>
    </div>
  );
};

export default Navbar;
