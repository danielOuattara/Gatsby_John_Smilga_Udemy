import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "./../../components/Seo";

//--------------------------------------------------------------

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

export default function ProjectTemplate(props) {
  console.log("props = ", props);
  return (
    <>
      <main className="project-template-page">
        <h2>{props.pageContext.title}</h2>
        <p>{props.data.strapiProject.description}</p>
      </main>
    </>
  );
}
