const path = require("path");
const titleToSlug = require("./rootUtilities/titleToSlug");
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

  result.data.allContentfulSimpleRecipesGatsbyJohnSmilga.nodes.forEach(
    (recipe) => {
      recipe.content.tags.forEach((tag) => {
        // const slug = titleToSlug(tag);
        // console.log("SLUG ======= ", slug);
        return createPage({
          path: "/tags/" + titleToSlug(tag),
          component: path.resolve("./src/templates/tag-template.js"),
          context: {
            tag,
          },
        });
      });
    },
  );
};
