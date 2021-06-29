import React, { useState } from "react";
import { graphql, Link, navigate } from "gatsby";
import Img from "gatsby-image";

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
  const [img, setImg] = useState("");

  const setImgHandler = (image) => {
    setImg(image);
  };

  // currently building the archive dropdown,
  // have to add refs ...
  const navigateHandler = () => {};

  return (
    <div className={classes.lookbookContainer}>
      <div className={classes.imageMainContainer}>
        <Img fluid={img} />
      </div>
      <div className={classes.imageNavContainer}>
        {props.data.allFile.edges.map((edge) => (
          <LookbookItems
            image={edge.node.childImageSharp.fluid}
            id={edge.node.id}
            onClick={setImgHandler}
          />
        ))}
        <Link to="/">Back</Link>
        <form action="" onChange={navigateHandler}>
          <select name="archive" id="">
            <option value="2021aw">2021AW</option>
            <option value="2020ss">2020SS</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default LookbookPage;
