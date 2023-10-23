import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const query = graphql`
  query AllPostsByCategory {
    allMdx {
      distinct(field: { frontmatter: { category: SELECT } })
    }
  }
`;

export default function Categories() {
  const data = useStaticQuery(query);

  return (
    <ul className="categories">
      {data.allMdx.distinct.map((category, index) => (
        <li key={index} className="category">
          <Link to={`/categories/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
}
