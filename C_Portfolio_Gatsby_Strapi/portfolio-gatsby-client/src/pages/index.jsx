import React from "react";
import { graphql } from "gatsby";
import { Hero, Jobs, Projects, Seo, Services } from "../components";

//-------------------------------------------------------------

export default function IndexPage(props) {
  const projects = props.data.allStrapiProject.nodes;
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects
          title="featured projects"
          showLinkToProjects
          projects={projects}
        />
      </main>
    </>
  );
}

//-------------------------------------------------------------

export const query = graphql`
  query {
    allStrapiProject(filter: { featured: { eq: true } }) {
      totalCount
      nodes {
        id
        title
        slug
        description
        featured
        github
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
