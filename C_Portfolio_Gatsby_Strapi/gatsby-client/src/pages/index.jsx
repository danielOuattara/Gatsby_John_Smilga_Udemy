import React from "react";
import { graphql } from "gatsby";
import { Hero, Jobs, Projects, Seo, Services } from "../components";

const IndexPage = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
};

export default IndexPage;
