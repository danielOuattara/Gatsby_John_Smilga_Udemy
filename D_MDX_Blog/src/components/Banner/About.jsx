import React from "react";
import SocialLinks from "../../constants/socialLinks";
import { StaticImage } from "gatsby-plugin-image";
import { Title } from "./../../components";
import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <Title title="about me" />
      <StaticImage
        src="./../../assets/banner-about.jpeg"
        alt="author"
        layout="fixed"
        width={150}
        height={150}
        className="img"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla officiis
        iure suscipit eum ullam laboriosam ipsam perspiciatis, in dicta
        doloribus ab,
      </p>
      <SocialLinks styleClass={"banner-icons"} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;
