/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Navbar, Footer, Sidebar } from "./index";
import { useGatsbyContext } from "../context/GatsbyContext";
import "./global.css";

export default function Layout(props) {
  const { isSidebarOpen } = useGatsbyContext();

  return (
    <>
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      {props.children}
      <Footer />
    </>
  );
}
