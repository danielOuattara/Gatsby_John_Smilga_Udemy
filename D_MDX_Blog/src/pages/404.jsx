import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="error-page">
        <div className="page-center">
          <span>404</span>
          <h4>Page cannot be found</h4>
          <Link to="/" className="btn">
            Back to home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
