/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // The unique name for each instance
        path: `${__dirname}/src/assets/images`, // Path to the directory
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`, // The unique name for each instance
        path: `${__dirname}/src/components/examples`, // Path to the directory
      },
    },
  ],
  siteMetadata: {
    title: `Simple recipes`,
    description: `Nice and clean recipes site`,
    inspiredBy: `John Smilga`,
    author: {
      name: `daniel.ouattara`,
      place: `Combs la ville, France`,
    },
    simpleData: [`item 1`, `item 2`],
    complexData: [
      {
        id: 1,
        first_name: `Katlin`,
        last_name: `Sudy`,
        email: `ksudy0@github.io`,
        gender: `Genderqueer`,
        ip_address: `28.40.93.31`,
      },
      {
        id: 2,
        first_name: `Baryram`,
        last_name: `Rubinovitch`,
        email: `brubinovitch1@mapquest.com`,
        gender: `Male`,
        ip_address: `82.141.109.32`,
      },
      {
        id: 3,
        first_name: `Julius`,
        last_name: `Hue`,
        email: `jhue2@bandcamp.com`,
        gender: `Male`,
        ip_address: `145.143.44.46`,
      },
    ],
  },
};
