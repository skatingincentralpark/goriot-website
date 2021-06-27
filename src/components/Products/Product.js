import React from "react";
import Img from "gatsby-image";

import { Link } from "gatsby";

import * as classes from "./Product.module.css";

const Product = (props) => {
  return (
    <Link to={`/shop/${props.id}`} className={classes.productCard}>
      <Img fluid={props.image1} durationFadeIn={1500} />
      <Img fluid={props.image2} durationFadeIn={1500} />
    </Link>
  );
};

export default Product;
