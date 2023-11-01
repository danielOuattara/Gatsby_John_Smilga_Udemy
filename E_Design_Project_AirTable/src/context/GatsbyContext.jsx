import React, { useState } from "react";
import sublinks from "../constants/links";

const GatsbyContext = React.createContext();

export default function GatsbyContextProvider(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [links] = useState(sublinks);

  const context = {
    isSidebarOpen,
    setIsSidebarOpen,
    links,
  };

  return (
    <GatsbyContext.Provider value={{ ...context }}>
      {props.children}
    </GatsbyContext.Provider>
  );
}

// make sure use
export const useGatsbyContext = () => {
  return React.useContext(GatsbyContext);
};
