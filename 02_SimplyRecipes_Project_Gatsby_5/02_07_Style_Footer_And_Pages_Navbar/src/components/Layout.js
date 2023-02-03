import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import "./../assets/css/main.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
