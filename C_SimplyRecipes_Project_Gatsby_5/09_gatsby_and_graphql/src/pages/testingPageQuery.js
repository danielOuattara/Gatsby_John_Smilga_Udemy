import { graphql } from "gatsby";
import React from "react";

export default function TestingPageQuery(props) {
  console.log("props ===> ", props);
  const {
    site: {
      siteMetadata: { title },
    },
  } = props.data;
  return (
    <>
      <h2>TestingPageQuery: {title}</h2>
    </>
  );
}

export const query = graphql`
  query SiteDataPageQuery {
    site {
      siteMetadata {
        title
        description
        inspiredBy
        author {
          name
          place
        }
        simpleData
        complexData {
          id
          email
          first_name
          gender
          last_name
          ip_address
        }
      }
    }
  }
`;
