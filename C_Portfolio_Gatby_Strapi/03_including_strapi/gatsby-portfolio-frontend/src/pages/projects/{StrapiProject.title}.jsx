import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import Seo from "../components/Seo";

//--------------------------------------------------------------

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      id
      title
      slug
      stack {
        id
        title
      }
      github
      featured
      description
    }
  }
`;

export default function ProjectTemplate(props) {
  console.log("props = ", props);
  return (
    <div>
      <h4>{props.pageContext.title}</h4>
    </div>
  );
}
