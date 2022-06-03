import React from "react";
import { Link } from "gatsby";
import Navbar from "./../components/Navbar";

const about = () => {
  return (
    <div>
      <Navbar />
      <h2>This is The About Page</h2>
      <Link to="/">Go back Home </Link>
    </div>
  );
};

export default about;
