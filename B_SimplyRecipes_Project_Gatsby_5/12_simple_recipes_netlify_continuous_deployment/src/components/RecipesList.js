import React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import titleToSlug from "../utils/titleToSlug";

export default function RecipesList({ recipes = [] }) {
  return (
    <div className="recipes-list">
      {recipes.map((item) => {
        const slug = titleToSlug(item.title);
        return (
          <Link to={`/${slug}`} key={item.id} className="recipe">
            <GatsbyImage
              image={getImage(item.image.gatsbyImageData)}
              className="recipe-img"
              alt={item.title}
            />
            <h5>{item.title}</h5>
            <p>
              Prep: {item.preparationTime} minutes | Cook: {item.cookingTime}{" "}
              minutes
            </p>
          </Link>
        );
      })}
    </div>
  );
}
