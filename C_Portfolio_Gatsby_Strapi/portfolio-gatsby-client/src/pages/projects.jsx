import React from "react";
import { graphql } from "gatsby";
import { Projects, Seo } from "../components";

export default function ProjectsPage(props) {
  const projects = props.data.allStrapiProject.nodes;
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  );
}

export const query = graphql`
  query {
    allStrapiProject {
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
