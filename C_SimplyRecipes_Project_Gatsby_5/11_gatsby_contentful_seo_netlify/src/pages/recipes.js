import * as React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";

export default function Recipes() {
  return (
    <Layout>
      <main className="page">
        <h1>Recipes page</h1>
        <AllRecipes />
      </main>
    </Layout>
  );
}
