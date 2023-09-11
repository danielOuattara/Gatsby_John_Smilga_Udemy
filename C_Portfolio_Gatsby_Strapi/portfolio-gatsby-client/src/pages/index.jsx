import React from "react";
import { graphql } from "gatsby";
import { Hero, Jobs, Projects, Seo, Services } from "../components";

const IndexPage = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
      </main>
    </>
  );
};

export default IndexPage;
