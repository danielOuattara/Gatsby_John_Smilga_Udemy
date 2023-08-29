import * as React from "react";
import Layout from "./../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "../components/Seo";

export const query = graphql`
  query {
    allContentfulSimpleRecipesGatsbyJohnSmilga(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      totalCount
      nodes {
        id
        title
        cookingTime
        preparationTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default function About(props) {
  const featuredRecipes =
    props.data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;

  return (
    <Layout>
      <Seo
        title="About Page"
        description="This is description for the about page"
      />
      <main className="page">
        <section className="about-page">
          <article className="">
            <h2>Lorem ipsum dolor sit amet consectetur. Ut, enim!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum sit animi in natus quidem quod sequi hic non
              reprehenderit autem.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum sit animi in natus quidem quod sequi hic non
              reprehenderit autem.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            alt="person poring salt in food bowl"
            src="./../assets/images/about.jpeg"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={featuredRecipes} />
        </section>
      </main>
    </Layout>
  );
}
