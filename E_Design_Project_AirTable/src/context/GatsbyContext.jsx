import React, { useState } from "react";
import sublinks from "../constants/links";

const GatsbyContext = React.createContext();

export default function GatsbyContextProvider(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
export const useGatsbyContext = () => {
  return React.useContext(GatsbyContext);
};
