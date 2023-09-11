import React from "react";
import { socialLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map((link) => (
            <a href={link.url} key={link.id} className="social-link">
              {link.icon}
            </a>
          ))}
        </div>
        <h4>
          copyright &copy; 2019 - {new Date().getFullYear()}{" "}
          <span>Web dev</span> all right reserved
        </h4>
      </div>
    </footer>
  );
}
