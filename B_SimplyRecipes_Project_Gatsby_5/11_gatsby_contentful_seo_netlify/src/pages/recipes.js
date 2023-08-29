import * as React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/Seo";

export default function Recipes() {
  return (
    <Layout>
      <Seo title="Recipes Page" />
      <main className="page">
        <h1>Recipes page</h1>
        <AllRecipes />
      </main>
    </Layout>
  );
}
