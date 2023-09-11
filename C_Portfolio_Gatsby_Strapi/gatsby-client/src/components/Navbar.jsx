import React from "react";
import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { page_links } from "../constants";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="web dev" />
          <button type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {page_links.map((link) => (
            <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
