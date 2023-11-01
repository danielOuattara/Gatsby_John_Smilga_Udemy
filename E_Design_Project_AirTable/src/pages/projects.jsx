import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Layout, Projects, Algolia } from "../components";

export default function ProjectsPage(props) {
  // console.log(props);
  const projects = props.data.projects.nodes;

  return (
    <Wrapper>
      <Layout>
        <Projects title="our projects" projects={projects} page />
        <Algolia />
      </Layout>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`;

export const query = graphql`
  query {
    projects: allAirtable(
      filter: { table: { eq: "projects" } }
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
  }
`;
