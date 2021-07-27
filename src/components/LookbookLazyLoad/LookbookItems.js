import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

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
      <GatsbyImage image={props.image} alt="lookbook-picture" />
    </div>
  );
};

export default LookbookItems;
