/* https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement */
import "./src/css/main.css";

import React from "react";
import { MDXProvider } from "@mdx-js/react";

const components = {
  // all the logic here
};

export function wrapRootElement({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
