import React, { useState } from "react";
import sublinks from "../constants/links";

const GatsbyContext = React.createContext();

export default function GatsbyContextProvider(props) {
  return (
    <GatsbyContext.Provider value={"HELLO WORLD!!!"}>
      {props.children}
    </GatsbyContext.Provider>
  );
}

// make sure use
export const useGatsbyContext = () => {
  return React.useContext(GatsbyContext);
};
