import React, { useState, useContext } from "react";
import sublinks from "../constants/links";

const GatsbyContext = React.createContext();

export default function GatsbyContextProvider(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [links] = useState(sublinks);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const context = {
    isSidebarOpen,
    setIsSidebarOpen,
    links,
    toggleSidebar,
  };

  return (
    <GatsbyContext.Provider value={{ ...context }}>
      {props.children}
    </GatsbyContext.Provider>
  );
}

// make sure use
export const useGatsbyContext = () => useContext(GatsbyContext);
