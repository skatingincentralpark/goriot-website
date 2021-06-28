import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as classes from "./Products.module.css";

import Product from "./Product";

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
              ...GatsbyContentfulFluid_noBase64
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
      <StaticQuery
        query={getProducts}
        render={(data) => {
          return (
            <section className={classes.productsSection}>
              {data.products.edges.map(({ node: product }) => {
                return (
                  <Product
                    image1={product.image[0].fluid}
                    image2={product.image[1].fluid}
                    id={product.id}
                  />
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
