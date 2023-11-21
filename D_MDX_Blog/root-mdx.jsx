import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Headings, Code } from "./src/components/Complete";

// const my_h1 = (props) => (
//   <span style={{ color: `orange` }} {...props}>
//     A brand new heading h1
//   </span>
// );
// const myH2 = (props) => {
//   if (props.title) {
//     return <h2 className="code" {...props} />;
//   } else {
//     <h2 className="code" {...props} />;
//   }
// };
// const my_h3 = (props) => <h3 style={{ color: `pink` }} {...props} />;
// const my_p = (props) => (
//   <p style={{ fontSize: "18px", lineHeight: 1.6, color: "green" }} {...props} />
// );

const Testing = ({ children }) => <Code>{children}</Code>;

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
};

export function wrapMDXRoot({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
