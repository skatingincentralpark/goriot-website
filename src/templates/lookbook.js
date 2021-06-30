import React, { useState, useEffect, useCallback } from "react";
import { graphql, Link } from "gatsby";
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
  const [imgState, setImgState] = useState({
    imgArr: [],
    currIndex: 0,
  });

  const [totalImg, setTotalImg] = useState(0);

  const activeIndexHandler = (index) => {
    setImgState({ currIndex: index });
  };

  const mapArray = useCallback(() => {
    let imgArray = [];
    props.data.allFile.edges.map((edge) => imgArray.push(edge.node.id));
    setTotalImg(imgArray.length + 1);
  }, [props.data.allFile.edges]);

  useEffect(() => {
    mapArray();
  }, [mapArray]);

  return (
    <div className={classes.lookbookContainer}>
      <div className={classes.imageMainContainer}>
        <Img
          fluid={
            props.data.allFile.edges[imgState.currIndex].node.childImageSharp
              .fluid
          }
        />
        <div>
          <p>
            {imgState.currIndex}/{totalImg}
            <br />
            <b>Spring / Summer 2021</b>
            <br />
            Spinning Ring ‘USA Cotton’ Tee
          </p>
        </div>
      </div>
      <div className={classes.imageNavContainer}>
        {props.data.allFile.edges.map((edge, i) => (
          <LookbookItems
            image={edge.node.childImageSharp.fluid}
            id={edge.node.id}
            activeIndexHandler={activeIndexHandler}
            key={edge.node.id}
            index={i}
          />
        ))}
        <div className={classes.lookbookLinks}>
          <Link to="/">Back</Link>

          <Link to="/lookbook/2021AW">2021AW</Link>

          <Link to="/lookbook/2020SS">2020SS</Link>
        </div>
      </div>
    </div>
  );
};

export default LookbookPage;
