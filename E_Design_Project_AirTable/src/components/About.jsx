import React from "react";
import styled from "styled-components";
import { Title } from "./index";
import services from "../constants/services";

export default function About() {
  return (
    <Wrapper className="section">
      <Title title="about us" />
      <div className="section-center">
        {services.map((service) => (
          <article key={service.id}>
            <span>{service.icon}</span>
            <h4>{service.label}</h4>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .section-center {
    margin-top: 4rem;
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .icon {
      font-size: 4rem;
      color: var(--clr-primary-5);
      margin-bottom: 1rem;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 500;
    }
    p {
      color: var(--clr-grey-3);
      max-width: 35em;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
