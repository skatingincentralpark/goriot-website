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

  const lookbookTemplate = path.resolve("./src/templates/lookbook.js");

  const res2 = await graphql(`
    query {
      allDirectory(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "lookbooks" }
        }
      ) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  res2.data.allDirectory.edges.forEach((edge) => {
    createPage({
      component: lookbookTemplate,
      path: `/lookbook/${edge.node.name}`,
      context: {
        name: edge.node.name,
        link: `lookbooks/${edge.node.name}`,
      },
    });
  });
};
