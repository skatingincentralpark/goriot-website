import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <StaticImage
        className="heroImage"
        src="../images/laughing.png"
        alt="Girl Laughing"
        placeholder="blurred"
        layout="fixed"
        width={767 / 2}
        height={917 / 2}
      />
      <Img fluid={data.laughing.childImageSharp.fluid} />
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
