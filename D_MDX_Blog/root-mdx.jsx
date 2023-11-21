import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Headings, Code, Blockquote, Example } from "./src/components/Complete";

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: Example,
};

export function wrapMDXRoot({ element }) {
  return <MDXProvider components={components}>{element}</MDXProvider>;
}
