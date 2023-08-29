import * as React from "react";

export default function Footer() {
  return (
    <footer className="page-footer ">
      <p>
        &copy; {new Date().getFullYear()} <span>SimpleRecipes</span> Powered
        with <a href="https://www.gatsbyjs.com/">Gatsby 5+</a>
      </p>
      <p>
        <a
          href="https://github.com/danielOuattara/Gatsby_John_Smilga_Udemy/tree/master/B_SimplyRecipes_Project_Gatsby_5/12_simple_recipes_netlify_continuous_deployment"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub Source Code</span>
        </a>
      </p>
    </footer>
  );
}
