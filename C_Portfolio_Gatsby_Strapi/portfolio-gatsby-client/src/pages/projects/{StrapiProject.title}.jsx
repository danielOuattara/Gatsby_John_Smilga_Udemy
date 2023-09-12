import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Seo } from "./../../components";

//--------------------------------------------------------------

export default function ProjectTemplate(props) {
  const data = props.data.strapiProject;
  return (
    <>
      <main className="project-template-page">
        <h2>{props.pageContext.title}</h2>
        <p>{data.description}</p>
      </main>
    </>
  );
}

export const query = graphql`
  query ($title: String) {
    strapiProject(title: { eq: $title }) {
      title
      description
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`;
