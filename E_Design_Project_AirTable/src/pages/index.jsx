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

export default function HomePage(props) {
  console.log(props);
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}

export const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "projects" } }
      limit: 3
      sort: { data: { date: DESC } }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`;
