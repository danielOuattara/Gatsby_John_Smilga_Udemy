import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
h2{
    color: red;
    font-size: 4rem;
}
`;

export function wrapRootElement({ element }) {
  console.log("SUPER WRAPPER");
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
}
