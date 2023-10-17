const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: path.resolve(`src/templates/post-template.jsx`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
