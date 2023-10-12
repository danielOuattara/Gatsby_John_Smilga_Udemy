import React from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Links, SocialLinks } from "../constants";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="mdx logo" />
          </Link>
          <button
            className="toggle-btn"
            onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <Links styleClass="nav-links"></Links>
        <SocialLinks styleClass="nav-icons"></SocialLinks>
      </div>
    </nav>
  );
}
