import React from "react";
import { Navbar, Sidebar, Footer } from "./../components";

import "../assets/css/main.css";
export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
