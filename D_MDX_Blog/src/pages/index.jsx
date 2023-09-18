import React from "react";
import { Hero, Layout, Posts } from "../components";
import { graphql } from "gatsby";

export default function IndexPage() {
  return (
    <Layout>
      <Hero showPerson />
    </Layout>
  );
}
