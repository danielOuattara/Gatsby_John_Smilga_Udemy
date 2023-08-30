import React from "react";
import { Navbar, Sidebar, Footer } from "./";

import "../assets/css/main.css";

export default function Layout(props) {
  return <>{props.children}</>;
}
