import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import ProductOpen from "../components/Products/ProductOpen";

export const query = graphql`
  query ($id: String!) {
    product: contentfulProductItem(id: { eq: $id }) {
      title
      price
      description {
        description
      }
      extraDescription {
        extraDescription
      }
      image {
        fluid(maxHeight: 420) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

const ProductPage = (props) => {
  // console.log(props.data.product.image[0].fluid);
  return (
    <Layout>
      <ProductOpen
        title={props.data.product.title}
        price={props.data.product.price}
        description={props.data.product.description.description}
        extraDescription={props.data.product.extraDescription.extraDescription}
        image={props.data.product.image[0].fluid}
      />
    </Layout>
  );
};

export default ProductPage;
