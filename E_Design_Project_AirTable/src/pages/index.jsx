import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
