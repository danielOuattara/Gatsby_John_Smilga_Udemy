import * as React from "react";
import Layout from "./../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "./../components/Seo";
import pluralize from "pluralize";

export const query = graphql`
  query ($tag: String) {
    allContentfulSimpleRecipesGatsbyJohnSmilga(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      totalCount
      nodes {
        id
        title
        preparationTime
        cookingTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default function TagTemplate(props) {
  const recipes = props.data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;
  const totalCount =
    props.data.allContentfulSimpleRecipesGatsbyJohnSmilga.totalCount;

  return (
    <Layout>
      <Seo title={`All ${pluralize.plural(props.pageContext.tag)} recipes`} />
      <main className="page">
        <h2>
          {props.pageContext.tag} category: {totalCount}
          {totalCount > 1 ? " recipes" : " recipe"}{" "}
        </h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
}
