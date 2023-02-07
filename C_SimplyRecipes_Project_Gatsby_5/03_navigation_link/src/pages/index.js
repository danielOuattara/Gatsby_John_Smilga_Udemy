import * as React from "react";
import { Link } from "gatsby";
import Navbar from "./../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar>
        <h1>Hello world! </h1>
        <Link to="/about"> go to About</Link>
      </Navbar>
    </div>
  );
}
