import React from "react";
import Layout from "./../components/Layout";
import {page, text} from "./../styles-modules/Home.module.css";
import { ExampleButton } from "../styled-component/ExampleButton";

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>Click Here</ExampleButton>
        <h1>World of Gatsby</h1>
        <h2 style={{ color: "#00FF00", textTransform: "capitalize" }}>
          Hello world of Gatsby
        </h2>
        <p className="home-heading">Gatsby is cool !</p>

        <h2> A title</h2>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          iste rem atque deleniti enim commodi odit, corrupti repudiandae
          perspiciatis eos nam fugit omnis incidunt facere hic? Laborum vero
          error ab?
        </p>

        <h2>Another title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          iste rem atque deleniti enim commodi odit, corrupti repudiandae
          perspiciatis eos nam fugit omnis incidunt facere hic? Laborum vero
          error ab?
        </p>
      </div>
    </Layout>
  );
}
