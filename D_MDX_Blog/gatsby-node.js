const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allPosts: allMdx {
        nodes {
          frontmatter {
            slug
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
      component: path.resolve(`src/templates/post-template.jsx`),
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
