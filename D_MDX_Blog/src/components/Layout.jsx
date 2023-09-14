/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Footer, Navbar, Sidebar } from "./index";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
