import React, { useState, useCallback } from "react";

import Img from "gatsby-image";
import * as classes from "./LookbookItems.module.css";

const LookbookItems = (props) => {
  const currIndexHandler = (event) => {
    props.activeIndexHandler(event.currentTarget.getAttribute("data-index"));
  };

  return (
    <div
      onClick={currIndexHandler}
      className={classes.imgContainer}
      data-index={props.index}
      key={props.id}
    >
      <Img fluid={props.image} />
    </div>
  );
};

export default LookbookItems;
