import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Error Page" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Sorry, page not found</h3>
        </section>
      </main>
    </Layout>
  );
}
