const path = require("path");
const postTemplate = path.resolve(`./src/templates/post-template.jsx`);

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allPosts: allMdx {
        nodes {
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
      allCategories: allMdx {
        distinct(field: { frontmatter: { category: SELECT } })
      }
    }
  `);

  result.data.allPosts.nodes.forEach((node) => {
    actions.createPage({
      path: `/posts/${node.frontmatter.slug}`,
      // component: path.resolve(`src/templates/post-template.jsx`),
      // component: node.internal.contentFilePath,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  result.data.allCategories.distinct.forEach((category) => {
    actions.createPage({
      path: `/categories/${category.toLowerCase()}`,
      component: path.resolve(`src/templates/category-template.jsx`),
      context: {
        category,
      },
    });
  });
};
