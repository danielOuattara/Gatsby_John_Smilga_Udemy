/* https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement */
import "./src/css/main.css";

import React from "react";
import { MDXProvider } from "@mdx-js/react";

/* h": () => ... not acting on screen */

const components = {
  // all the logic here
  h3: () => <span>I am a magic h3</span>,
};

export function wrapRootElement({ element }) {
  console.log("HELLO =======================");
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
