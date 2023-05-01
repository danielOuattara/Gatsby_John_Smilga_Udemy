import * as React from "react";
import { Link } from "gatsby";
import Navbar from "./../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello world! </h1>
      <ul>
        <li>
          <Link to="/contact"> go to Contact</Link>
        </li>
        <li>
          <Link to="/about"> go to About</Link>
        </li>
      </ul>
    </div>
  );
}
