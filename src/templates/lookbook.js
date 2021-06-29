import * as React from "react";
import { graphql } from "gatsby";

import * as classes from "./lookbook.module.css";

import LookbookItems from "../components/Lookbook/LookbookItems";

export const pageQuery = graphql`
  query ($link: String!) {
    allFile(filter: { relativeDirectory: { eq: $link } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const LookbookPage = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={classes.imageNavContainer}>
        {props.data.allFile.edges.map((edge) => (
          <LookbookItems
            image={edge.node.childImageSharp.fluid}
            id={edge.node.id}
          />
        ))}
      </div>
    </div>
  );
};

export default LookbookPage;
