import * as React from "react";
import { graphql } from "gatsby";

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
    productphotos: allFile(
      filter: { relativeDirectory: { eq: "productphotos" } }
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              width: 1000
              blurredOptions: { width: 10 }
              placeholder: NONE
              quality: 100
            )
          }
        }
      }
    }
  }
`;

const ProductPage = (props) => {
  return (
    <div>
      <ProductOpen
        title={props.data.product.title}
        price={props.data.product.price}
        description={props.data.product.description.description}
        extraDescription={props.data.product.extraDescription.extraDescription}
        images={props.data.productphotos.edges}
      />
    </div>
  );
};

export default ProductPage;
