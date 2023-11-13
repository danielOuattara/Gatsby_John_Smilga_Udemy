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
  const projects = props.data.projects.nodes;
  return (
    <Layout>
      <Hero />
      <About />
      {/* <Projects projects={projects} title={"latest projects"} /> */}
      <GridProjects projects={projects} title={"latest projects"} />
      <Survey />
      <Slider customers={props.data.customers.nodes} />
    </Layout>
  );
}

export const query = graphql`
  query {
    projects: allAirtable(
      filter: { table: { eq: "projects" } }
      limit: 4
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
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            internal {
              contentDigest
            }
          }
        }
      }
    }
    customers: allAirtable(filter: { table: { eq: "customers" } }) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            internal {
              contentDigest
            }
          }
        }
      }
    }
  }
`;
