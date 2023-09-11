import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export const query = graphql`
  query {
    allStrapiJob(sort: { createdAt: DESC }) {
      nodes {
        id
        position
        company
        date
        description {
          id
          name
        }
      }
    }
  }
`;

export default function Jobs() {
  const data = useStaticQuery(query);
  console.log("data = ", data);
  return <h2>jobs component</h2>;
}
