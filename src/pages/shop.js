import React from "react";
// import { graphql } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout/layout";

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

const ShopPage = () => {
  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
      {/* <h1>hello world</h1>  */}
      {/* {data.allContentfulProductItem.edges.map((edge) => {
        return (
          <div>
            <p>{edge.node.id}</p>
            <p>{edge.node.title}</p>
            <p>{edge.node.price}</p>
            <Img fluid={edge.node.image.fluid} />
          </div>
        );
      })} */}
    </Layout>
  );
};

// export const query = graphql`
//   query myQuery {
//     allContentfulProductItem {
//       edges {
//         node {
//           id
//           title
//           price
//           category
//           image {
//             fluid(maxHeight: 420) {
//               src
//             }
//           }
//           description {
//             description
//           }
//           extraDescription {
//             extraDescription
//           }
//         }
//       }
//     }
//   }
// `;

export default ShopPage;
