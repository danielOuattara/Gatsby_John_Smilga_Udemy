import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTag";
import titleToSlug from "../utils/titleToSlug";
import Seo from "../components/Seo";

export const query = graphql`
  query {
    allContentfulSimpleRecipesGatsbyJohnSmilga(sort: { title: ASC }) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default function Tag(props) {
  const recipesTags =
    props.data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;

  const tags = setupTags(recipesTags);
  return (
    <Layout>
      <Seo title="Tags Page" />
      <main className="page">
        <section className="tags-page">
          {tags.map((item) => (
            <Link
              key={item[0]}
              to={`/tags/${titleToSlug(item[0])}`}
              className="tag"
            >
              <h5>{item[0]}</h5>
              <p>
                {item[1]}
                {item[1] > 1 ? " recipes" : " recipe"}
              </p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
