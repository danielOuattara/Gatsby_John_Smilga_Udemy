import React from "react";
import { Link } from "gatsby";
import { socialLinks } from "./../constants";
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Daniel</h1>
            <h4> web & mobile </h4>
            <h4> backend, frontend & database </h4>
            <Link to="/contact" className="btn">
              {" "}
              keep in touch
            </Link>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </article>
        <StaticImage
          src="./../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  );
}
