import * as React from "react";
import Layout from "./../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur? Nulla reiciendis
              dignissimos iure non, nihil earum ratione aspernatur velit
              quibusdam
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur Nostrum quia libero dolores
              quibusdam necessitatibus expedita voluptate repellat?
            </p>
            <p></p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="./../assets/images/about.jpeg"
            alt="person pouring salt"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
}
