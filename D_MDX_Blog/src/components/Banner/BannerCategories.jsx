import React from "react";
import styled from "styled-components";
import { Categories, Title } from "./../../components";
const BannerCategories = () => {
  return (
    <Wrapper>
      <Title title={"categories"} />
      <Categories />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .category {
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    display: block;
    padding: 0.25rem 0 0.25rem 1rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
    a {
      color: var(--clr-grey-5);
    }
  }
  .category:hover {
    background: var(--clr-grey-10);
  }
`;
export default BannerCategories;
