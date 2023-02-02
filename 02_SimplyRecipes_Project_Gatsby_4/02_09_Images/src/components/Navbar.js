import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "./../assets/images/logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simple recipe logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShowLinks(!showLinks)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={showLinks ? "show-links nav-links" : " nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>

          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
          >
            Recipes
          </Link>

          <Link to="/tags" className="nav-link" activeClassName="active-link">
            Tags
          </Link>

          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
