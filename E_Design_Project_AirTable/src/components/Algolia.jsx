import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Title } from "./index";
import algoliasearch from "algoliasearch/lite";

// import { InstantSearch, SearchBox, Hits, useHits } from "react-instantsearch";  // --- 1
import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);
//--- 1 OK
// function CustomHits(props) {
//   const { hits, results, sendEvent } = useHits(props);
//   return hits.map((hit) => (
//     <article key={hit.objectID}>
//       <GatsbyImage image={hit.image} className="img" alt={hit.name} />
//       <h4>{hit.name}</h4>
//     </article>
//   ));
// }

const CustomHits_2 = connectHits(({ hits }) => {
  return hits.map((hit) => (
    <article key={hit.objectID}>
      <GatsbyImage image={hit.image} className="img" alt={hit.name} />
      <h4>{hit.name}</h4>
    </article>
  ));
});

export default function Search() {
  return (
    <Wrapper>
      <Title title={" algolia search"} />
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      >
        <SearchBox placeholder="Search here... 🔎" />
        <Container className="section-center">
          {/* --- 1 */}
          {/* <CustomHits /> */}
          <CustomHits_2 />
        </Container>
      </InstantSearch>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 0;
  .ais-SearchBox {
    width: 90vw;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 2rem;
    form {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 3rem 3rem;
      input,
      button {
        border: transparent;
        font-size: 1.1rem;
      }
      input {
        border: transparent;
        padding: 0.5rem 1rem;
        outline-color: var(--clr-grey-9);
      }
      button {
        background: var(--clr-grey-5);
        svg {
          fill: var(--clr-white);
        }
      }
      button.ais-SearchBox-reset {
        background: var(--clr-red-light);
      }
    }
  }
`;

const Container = styled.div`
  display: grid;
  gap: 2rem;
  /* safari workaround */
  grid-gap: 2rem;

  article {
    background: var(--clr-white);
    text-align: center;
    border-radius: var(--radius);
    box-shadow: var(--ligth-shadow);
    transition: var(--transition);
    &:hover {
      transform: scale(1.001);
      box-shadow: var(--dark-shadow);
    }
    h4 {
      padding: 1rem;
      margin-bottom: 0;
    }
  }
  .img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 10rem;
  }
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    .img {
      height: 8.5rem;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
