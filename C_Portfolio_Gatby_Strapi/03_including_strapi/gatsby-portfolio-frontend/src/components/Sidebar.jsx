import React from "react";
import { links, socialLinks } from "../constants";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";

export default function Sidebar(props) {
  return (
    <aside className={props.isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={props.toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={props.isSidebarOpen ? "sidebar-links" : ""}>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.url} onClick={props.toggleSidebar}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={props.isSidebarOpen ? "social-links sidebar-icons" : ""}>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="social-link">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
