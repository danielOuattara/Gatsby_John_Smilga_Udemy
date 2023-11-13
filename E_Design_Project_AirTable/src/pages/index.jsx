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
          }
        }
      }
    }
    customers: allAirtable(filter: { table: { eq: "customers" } }) {
      totalCount
      nodes {
        id
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 150
                  height: 150
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
  }
`;
