import * as React from "react";
import { Link } from "gatsby";
export default function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>Sorry, page not found</p>
      <Link to="/">Go Back To Home</Link>
    </div>
  );
}
