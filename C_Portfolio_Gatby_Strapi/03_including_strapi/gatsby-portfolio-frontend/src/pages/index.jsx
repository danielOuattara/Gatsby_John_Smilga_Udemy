import React from "react";
import { graphql } from "gatsby";
import { Hero, Services, Jobs, Projects, Seo, Navbar } from "../components";

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

export const query = graphql`
  query {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        id
        slug
        title
        featured
        description
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
