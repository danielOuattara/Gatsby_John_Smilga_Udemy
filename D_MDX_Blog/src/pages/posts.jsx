import React from "react";
import { Layout, Hero, Posts } from "../components";
import { graphql } from "gatsby";

export default function PostsPage(props) {
  // console.log(props);
  return (
    <Layout>
      <Hero />
      <Posts title={"recently published"} posts={props.data.allMdx.nodes} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          readTime
          slug
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`;
