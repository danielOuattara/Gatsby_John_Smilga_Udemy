import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./gallery.module.css";

const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "recipes" }
      }
    ) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            # transformOptions: { grayscale: true }
            width: 275
            height: 250
          )
        }
      }
    }
  }
`;

export default function Gallery() {
  const data = useStaticQuery(query);
  const images = data.allFile.nodes;
  return (
    <section className={styles.section}>
      {images.map((imageObject) => {
        const image = getImage(imageObject.childImageSharp.gatsbyImageData);

        return (
          <article key={imageObject.name} className={styles.item}>
            <GatsbyImage
              image={image}
              alt={imageObject.name}
              className={styles.galleryImg}
            />
            <p>{imageObject.name}</p>
          </article>
        );
      })}
    </section>
  );
}

// const Wrapper = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   .item {
//     margin-right: 1rem;
//   }
//   .gallery-img {
//     border-radius: 1rem;
//   }
// `;
