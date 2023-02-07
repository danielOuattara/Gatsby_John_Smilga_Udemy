import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/docs/gatsby">About Gatsby</Link>
    </div>
  );
}
