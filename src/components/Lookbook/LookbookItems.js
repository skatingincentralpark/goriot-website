import React, { useState } from "react";
import { Link } from "gatsby";

import Img from "gatsby-image";
import * as classes from "./LookbookItems.module.css";

const LookbookItems = (props) => {
  const imgStateHandler = () => {
    props.onClick(props.image);
  };

  return (
    <div onClick={imgStateHandler} className={classes.imgContainer}>
      <Link>
        <Img fluid={props.image} />
      </Link>
    </div>
    //   <p>{props.id}</p>
  );
};

export default LookbookItems;
