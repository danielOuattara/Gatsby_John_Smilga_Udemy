import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

export default function Gallery() {
  const data = useStaticQuery(graphql`
    query ImageGallery {
      allFile(filter: { extension: { ne: "svg" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FIXED
              width: 200
              height: 200
            )
          }
        }
      }
    }
  `);

  //   console.log("data ==>> ", data.allFile.nodes);
  const images = data.allFile.nodes;
  //   console.log("images ===>> ", images);
  return (
    <Wrapper>
      {images.map((imageObject) => {
        const image = getImage(imageObject.childImageSharp.gatsbyImageData);
        return (
          <article key={imageObject.name} className="item">
            <GatsbyImage
              image={image}
              alt={imageObject.name}
              className="gallery-img"
            />
            <p>{imageObject.name}</p>
          </article>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`;
