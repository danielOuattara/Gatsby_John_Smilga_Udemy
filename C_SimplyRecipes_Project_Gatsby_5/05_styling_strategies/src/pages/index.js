import * as React from "react";
import Layout from "./../components/Layout";
import { page, text } from "./../style/Home.module.css";
import { ExampleButton } from "../styled-components/ExampleButton";

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 style={{ color: "green", textTransform: "capitalize" }}>
          Hello world!{" "}
        </h1>
        <ExampleButton type="button" onClick={() => alert("Clicked !")}>
          Click on Button Styled Component
        </ExampleButton>
        <h2 className="home-heading">Hello world Again! </h2>
        <p className={(page, text)}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          excepturi nisi quia. Nihil doloribus architecto recusandae officia ad
          quibusdam impedit eligendi sapiente culpa minus, velit magni, beatae
          dolor iste neque?
        </p>
      </Layout>
    </div>
  );
}
