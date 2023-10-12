import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero(props) {
  return (
    <header className="hero">
      {props.showPerson && (
        <StaticImage
          src="./../assets/person.png"
          placeholder="blurred"
          className="hero-person"
          alt="person typing on keyboard"
        />
      )}
    </header>
  );
}
