import * as React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimpleRecipes</span> Powered
        with <a href="https://www.gatsbyjs.com/">gatsby</a>
      </p>
    </footer>
  );
};

export default Footer;
