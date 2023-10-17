import React from "react";
import { Layout, Hero, Posts } from "../components";
import { graphql } from "gatsby";

export default function CategoryTemplate(props) {
  console.log(props);
  return <h2>category template</h2>;
}

export const query = graphql`
  query QuerysingleCategory($category: String) {
    allMdx(filter: { frontmatter: { category: { eq: $category } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            category
            readTime
            date(formatString: "MMMM, Do YYYY")
            image {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
          excerpt
        }
      }
    }
  }
`;
