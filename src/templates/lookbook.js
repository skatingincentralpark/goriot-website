import React, { Fragment } from "react";
import { graphql } from "gatsby";

import Lookbook from "../components/Lookbook/Lookbook";

const LookbookPage = (props) => {
  return (
    <Fragment>
      <Lookbook data={props.data} />
    </Fragment>
  );
};

export const pageQuery = graphql`
  query ($link: String!) {
    thumbnails: allFile(filter: { relativeDirectory: { eq: $link } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              width: 300
              blurredOptions: { width: 10 }
              placeholder: NONE
            )
          }
        }
      }
    }
    fullsize: allFile(filter: { relativeDirectory: { eq: $link } }) {
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

export default LookbookPage;
