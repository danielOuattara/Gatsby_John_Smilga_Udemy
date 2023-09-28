import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
export default function Seo(props) {
  const data = useStaticQuery(query);

  return (
    <Helmet
      title={`${props.title} | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: props.description || data.site.siteMetadata.description,
        },
      ]}
      htmlAttributes={{ lang: "en-UK" }}
    ></Helmet>
  );
}
