import React from "react";
import styled from "styled-components";
import { About, Recent, BannerCategories } from "./../../components";

export default function Banner() {
  return (
    <Wrapper>
      <About />
      <BannerCategories />
      <Recent />
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1rem;
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 200px);
      column-gap: 3rem;
    }
  }
`;
