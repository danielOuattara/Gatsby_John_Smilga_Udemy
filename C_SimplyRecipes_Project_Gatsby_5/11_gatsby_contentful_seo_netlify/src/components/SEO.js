import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO(props) {
  return (
    <Helmet
      title={props.title}
      meta={[{ name: `description`, content: props.description }]}
      htmlAttributes={{ lang: "en-UK" }}
    ></Helmet>
  );
}
