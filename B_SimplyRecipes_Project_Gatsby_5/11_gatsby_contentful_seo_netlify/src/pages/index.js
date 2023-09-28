import * as React from "react";
import Layout from "./../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/Seo";
import { useLocation } from "@reach/router";

export default function Home() {
  const location = useLocation();
  console.log("location = ", location);
  return (
    <div>
      <Layout>
        <Seo title="Home Page" description={null} />
        <main className="page">
          <header className="hero">
            <StaticImage
              src="./../assets/images/main.jpeg"
              alt="eggs"
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
          <AllRecipes />
        </main>
      </Layout>
    </div>
  );
}
