import React from "react";
import { SocialLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass={"footer-icons"} />
        <p>
          &copy; 2019 - {new Date().getFullYear()} mdx blog. all rights reserved
        </p>
      </div>
    </footer>
  );
}
