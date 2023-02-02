import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> SimplyRecipes. </span> Powered by{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>{" "}
      </p>
      <p>daniel.ouattara@gmx.com</p>
    </footer>
  );
};

export default Footer;
