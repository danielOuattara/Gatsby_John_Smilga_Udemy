import React from "react";
import { Hero, Layout, Posts } from "./../components";
import { graphql } from "gatsby";

export default function IndexPage(props) {
  // console.log(props);
  return (
    <Layout>
      <Hero showPerson />
      <Posts title={"recently published"} posts={props.data.allMdx.nodes} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(limit: 3, sort: { frontmatter: { date: DESC } }) {
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
          }
        }
        excerpt
      }
    }
  }
`;
