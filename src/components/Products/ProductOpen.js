import React, { useRef, useState } from "react";
import { Link } from "gatsby";

import ProductImages from "./ProductImages";
import ExtraOptions from "./ExtraOptions";

import * as classes from "./ProductOpen.module.css";

const ProductOpen = (props) => {
  const sizeInputRef = useRef();
  const nameInputRef = useRef();

  return (
    <section className={classes.shopItemOpen}>
      <div className={classes.productGallery}>
        <ProductImages images={props.images} />
      </div>
      <div className={classes.content}>
        <h1 ref={nameInputRef} className={classes.productTitle}>
          {props.title}
        </h1>
        <h2 className={classes.productPrice}>$70</h2>
        <ExtraOptions />
        <p className={classes.productDescription}>
          100% Deadstock American cotton. Lightweight and soft. Spun to create
          slubby texture (similar to t-shirts from the mid-90s). Silkscreen
          graphic printed. Boxy fit – longer sleeves and shortened body.
          <br />
          <br />
          Please be aware that the t-shirt will stretch 2-3cm in the shoulders &
          chest with wear. The collar is initially snug, however will stretch to
          a perfect fit with wear.
        </p>
        <form className={classes.productActions} action="">
          <select
            ref={sizeInputRef}
            className={classes.productSizeSelect}
            name="size"
            id="size"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
          <div className={classes.shopBtns}>
            <button type="submit" className={classes.atc}>
              Add To Cart
            </button>
          </div>
        </form>
        <Link to="/shop" className={classes.viewAllBtn}>
          View All
        </Link>
      </div>
    </section>
  );
};

export default ProductOpen;
