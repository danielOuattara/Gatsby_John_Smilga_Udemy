import React from "react";
import { graphql } from "gatsby";
import { Hero, Services, Jobs, Projects, Seo, Navbar } from "../components";

export default function IndexPage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
