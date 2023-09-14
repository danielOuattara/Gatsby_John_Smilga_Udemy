/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Fullstack Portfolio",
    description:
      "Portfolio website where I present myself and show my skills on different kind of projects and using a wide range of effective web design technologies. From the contact page, everybody can contact me",
    titleTemplate: `%s | Fullstack Portfolio `,
    url: "https://daniel-gatsby-strapi-portfolio.netlify.app",
    linkedinUsername: "daniel-b-ouattara-677146ab",
    image: "/mainImg.png",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ["job", "project"],
        singleTypes: ["about"],
      },
    },
  ],
};
