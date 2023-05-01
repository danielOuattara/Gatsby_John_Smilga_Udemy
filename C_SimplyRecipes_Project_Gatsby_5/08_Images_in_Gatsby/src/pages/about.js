import * as React from "react";
import Layout from "./../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function About() {
  return (
    <Layout>
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
      </main>
    </Layout>
  );
}
