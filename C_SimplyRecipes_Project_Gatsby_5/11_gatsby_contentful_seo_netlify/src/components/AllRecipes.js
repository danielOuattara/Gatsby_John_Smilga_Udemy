import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allContentfulSimpleRecipesGatsbyJohnSmilga(sort: { title: ASC }) {
      nodes {
        id
        title
        cookingTime
        preparationTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default function AllRecipes() {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
}
