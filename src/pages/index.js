import React, { useState } from "react";
import Transition from "react-transition-group/Transition";

import { graphql } from "gatsby";
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  return (
    <div>
      <div className="redLine"></div>
      <Img
        className="heroImage rotating"
        fluid={data.laughing.childImageSharp.fluid}
        durationFadeIn={1500}
      />
    </div>
  );
};

export const query = graphql`
  query {
    laughing: file(relativePath: { eq: "laughing.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
