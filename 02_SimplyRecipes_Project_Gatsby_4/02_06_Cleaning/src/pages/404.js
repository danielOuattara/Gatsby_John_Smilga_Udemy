import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <h2>404</h2>
      <p>Sorry, page not found</p>
      <Link to="/">Go back Home </Link>
    </Layout>
  );
}
