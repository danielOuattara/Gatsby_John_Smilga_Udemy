import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default function Success() {
  return (
    <Layout>
      <section className="success-page">
        <div className="page-center">
          <h2>your submission was successful</h2>
          <Link to="/" className="btn">
            Back to home page
          </Link>
        </div>
      </section>
    </Layout>
  );
}
