import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../styles/Navbar.css";

const Navbar = () => {
  const toTheTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="navbar ">
      <a onClick={toTheTop}>Niki:)</a>

      <div className="navbar-right">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          // onSetActive={this.handleSetActive}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          // onSetActive={this.handleSetActive}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
