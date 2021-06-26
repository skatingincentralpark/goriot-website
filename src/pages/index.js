import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Img className="heroImage" fluid={data.laughing.childImageSharp.fluid} />
    </Layout>
  );
};

export const query = graphql`
  query {
    laughing: file(relativePath: { eq: "laughing.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
