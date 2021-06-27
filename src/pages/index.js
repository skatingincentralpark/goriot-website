import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Img
        className="heroImage rotating"
        fluid={data.laughing.childImageSharp.fluid}
        durationFadeIn={1500}
      />
    </Layout>
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
