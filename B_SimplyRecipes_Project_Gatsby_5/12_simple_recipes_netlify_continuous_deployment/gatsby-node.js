// const path = require("path");
// const titleToSlug = require("./rootUtilities/titleToSlug");

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     query GetRecipes {
//       allContentfulSimpleRecipesGatsbyJohnSmilga {
//         nodes {
//           content {
//             tags
//           }
//         }
//       }
//     }
//   `);

//   result.data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes.forEach(
//     (recipe) => {
//       return recipe.content.tags.forEach((tag) => {
//         return createPage({
//           path: "/tags/" + titleToSlug(tag),
//           component: path.resolve("./src/templates/tagTemplate.js"),
//           context: {
//             tag,
//           },
//         });
//       });
//     },
//   );
// };

//--------------------------------------------------------------------------- BETTER

const path = require("path");
const titleToSlug = require("./rootUtilities/titleToSlug");
const setupTags = require("./rootUtilities/setupTag");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulSimpleRecipesGatsbyJohnSmilga {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  const tags = setupTags(
    result.data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes,
  );

  return tags.forEach((singleTag) => {
    return createPage({
      path: "/tags/" + titleToSlug(singleTag[0]),
      component: path.resolve("./src/templates/tagTemplate.js"),
      context: {
        tag: singleTag[0],
      },
    });
  });
};
