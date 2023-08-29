import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
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

export default function Contact(props) {
  const featuredRecipes =
    props.data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes;
  return (
    <Layout>
      <Seo title="Contact Page" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Stay in Touch ?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus iste dolorem id maxime quidem vitae
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quaerat, est placeat quibusdam distinctio repellat nobis assumenda
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/myyqwqyj"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name"> name</label>
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email"> email</label>
                <input type="text" name="email" id="email" />
              </div>

              <div className="form-row">
                <label htmlFor="message"> message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <button type="submit" className="btn block">
                send
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={featuredRecipes} />
        </section>
      </main>
    </Layout>
  );
}
