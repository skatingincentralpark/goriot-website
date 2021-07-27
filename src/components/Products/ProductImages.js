import React, { useState } from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as classes from "./ProductImages.module.css";

const ProductImages = (props) => {
  const [currIndex, setCurrIndex] = useState(0);

  const activeIndexHandler = (event) => {
    setCurrIndex(event.currentTarget.getAttribute("data-index"));
  };

  return (
    <div className={classes.productImagesContainer}>
      <div className={classes.imageMainContainer}>
        <GatsbyImage
          image={getImage(props.images[currIndex].node)}
          alt="lookbook-main-picture"
        />
      </div>

      <div className={classes.imageThumbContainer}>
        {props.images.map((image, i) => (
          <div className={classes.thumbnail} key={i}>
            <GatsbyImage
              image={getImage(image.node)}
              alt="lookbook-picture"
              id={image.node.id}
              data-index={i}
              onClick={activeIndexHandler}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
