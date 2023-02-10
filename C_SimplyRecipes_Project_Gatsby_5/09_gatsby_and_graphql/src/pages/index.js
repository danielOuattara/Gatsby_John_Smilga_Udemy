import * as React from "react";
import Layout from "./../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";
import FetchData from "./../components/examples/FetchData";

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="./../assets/images/main.jpeg"
            alt="banner"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <FetchData />
      </main>
    </Layout>
  );
}
