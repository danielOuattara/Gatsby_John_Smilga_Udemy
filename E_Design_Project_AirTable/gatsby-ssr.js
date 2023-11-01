import React from "react";
import GatsbyContextProvider from "./src/context/GatsbyContext";

export function wrapRootElement({ element }) {
  return <GatsbyContextProvider>{element}</GatsbyContextProvider>;
}
