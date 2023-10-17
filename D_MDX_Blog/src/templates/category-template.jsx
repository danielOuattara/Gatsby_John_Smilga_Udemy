import React from "react";
import { Layout, Hero, Posts } from "../components";
import { graphql } from "gatsby";

export default function CategoryTemplate(props) {
  return (
    <Layout>
      <Hero />
      <Posts
        title={`categories / ${props.pageContext.category}`}
        posts={props.data.allMdx.nodes}
      />
    </Layout>
  );
}

export const query = graphql`
  query QuerysingleCategory($category: String) {
    allMdx(filter: { frontmatter: { category: { eq: $category } } }) {
      nodes {
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
`;
