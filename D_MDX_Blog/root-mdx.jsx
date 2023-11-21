import React from "react";
import { MDXProvider } from "@mdx-js/react";

const my_h1 = (props) => (
  <span style={{ color: `orange` }} {...props}>
    A brand new heading h1
  </span>
);
const my_h2 = (props) => <h2 style={{ color: `red` }} {...props} />;
const my_h3 = (props) => <h3 style={{ color: `pink` }} {...props} />;
const my_p = (props) => (
  <p style={{ fontSize: "18px", lineHeight: 1.6, color: "green" }} {...props} />
);

const components = {
  h1: my_h1,
  h2: my_h2,
  h3: my_h3,
  p: my_p,
};

export function wrapMDXRoot({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
