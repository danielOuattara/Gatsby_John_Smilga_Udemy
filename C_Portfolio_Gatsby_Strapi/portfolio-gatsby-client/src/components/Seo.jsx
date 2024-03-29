import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";

//--------------------------------------------------------------------------

export const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl
        linkedInUsername
        twitterUsername
      }
    }
  }
`;

export default function Seo({ title, description, image, children }) {
  // console.log("image =  ", image);
  const data = useStaticQuery(query);

  const { pathname } = useLocation();
  console.log(pathname);

  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
    linkedInUsername,
    twitterUsername,
  } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage} `,
    url: `${siteUrl}${pathname || ``}`,
    linkedInUsername,
    twitterUsername,
  };

  console.log("seo =  ", seo);

  return (
    <>
      <title> {`${seo.title} | Fullstack Portfolio`}</title>

      {/* ok with linkedIn + facebook */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />

      {/* twitter specific */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
}

//----------------------------------------------------------
