const path = require(`path`);

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve("./src/templates/product-item.js");
  const res = await graphql(`
    query {
      allContentfulProductItem {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  res.data.allContentfulProductItem.edges.forEach((edge) => {
    createPage({
      component: productTemplate,
      path: `/shop/${edge.node.id}`,
      context: {
        id: edge.node.id,
      },
    });
  });
};
