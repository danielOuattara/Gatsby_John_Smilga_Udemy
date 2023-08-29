import * as React from "react";
import Layout from "./../components/Layout";
// import ImagesExample1 from "../components/examples/ImagesExample1";
// import ImagesExample2 from "../components/examples/ImagesExample2";
import FetchData from "../components/examples/FetchData";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <div>
      <Layout>
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
          {/* <ImagesExample1 /> */}
          {/* <ImagesExample2 /> */}
          <FetchData />
        </main>
      </Layout>
    </div>
  );
}
