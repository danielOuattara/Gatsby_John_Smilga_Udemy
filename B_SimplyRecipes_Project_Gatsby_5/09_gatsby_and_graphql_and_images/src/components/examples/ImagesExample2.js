import React from "react";
import "./images_Example_2.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Images_Example_2() {
  return (
    <section>
      <>
        {/* <h4> fixed </h4> */}
        <StaticImage
          src="./../../assets/images/recipes/recipe-1.jpeg"
          alt="recipe 1"
          placeholder="blurred"
          layout="fixed"
          // width={200}
          // className="example-img"
          as="div"
        />
      </>

      <>
        {/* <h4> constrained / default</h4> */}
        <StaticImage
          src="./../../assets/images/recipes/recipe-1.jpeg"
          alt="recipe 1"
          // height={400} // toggle
          placeholder="tracedSVG"
          layout="constrained"
          // className="example-img"
          as="footer"
        />
      </>

      <>
        {/* <h4> full width </h4> */}
        <StaticImage
          src="./../../assets/images/recipes/recipe-1.jpeg"
          alt="recipe 1"
          placeholder="dominantColor"
          layout="fullWidth"
          // className="example-img"
          as="article"
          // width={300} //toggle
        />
      </>
    </section>
  );
}
