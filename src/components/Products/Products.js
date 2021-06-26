import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const getProducts = graphql`
  {
    products: allContentfulProductItem {
      edges {
        node {
          id
          title
          price
          category
          image {
            fluid(maxHeight: 420) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            description
          }
          extraDescription {
            extraDescription
          }
        }
      }
    }
  }
`;

const Products = () => {
  return (
    <div>
      <h1>hello from products component</h1>
      <StaticQuery
        query={getProducts}
        render={(data) => {
          return (
            <section>
              {data.products.edges.map(({ node: product }) => {
                return (
                  <div>
                    <p>{product.title}</p>
                    <small>{product.description.description}</small>
                    <Img fluid={product.image.fluid} />
                  </div>
                );
              })}
            </section>
          );
        }}
      />
    </div>
  );
};

export default Products;
