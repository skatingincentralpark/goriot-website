import React, { useRef, useState, useContext } from "react";
import Img from "gatsby-image";

import * as classes from "./ProductOpen.module.css";

const ProductOpen = (props) => {
  const sizeInputRef = useRef();
  const nameInputRef = useRef();

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // extra info classes
  const showMoreInfoHandler = () => {
    setShowMoreInfo(!showMoreInfo);
  };
  const moreInfoClasses = showMoreInfo
    ? `${classes.productDescription2} ${classes.border2}`
    : `${classes.productDescription2} ${classes.hidden}`;

  const productExtraClasses = showMoreInfo
    ? `${classes.productExtra} ${classes.border}`
    : `${classes.productExtra}`;

  const closeExtraInfoHandler = () => {
    setShowMoreInfo(false);
  };

  return (
    <section
      className={classes.shopItemOpen}
      onClick={showMoreInfo ? closeExtraInfoHandler : null}
    >
      <div className={classes.productGallery}>
        <Img fluid={props.image}></Img>
        {/* <img src={img1} alt="" /> */}
      </div>
      <div className={classes.content}>
        <h1 ref={nameInputRef} className={classes.productTitle}>
          {props.title}
        </h1>
        <h2 className={classes.productPrice}>$70</h2>
        <div className={productExtraClasses}>
          <button>Sizing</button>
          <button onClick={showMoreInfoHandler}>More Info</button>
          <button>Lookbook</button>
        </div>
        <p className={moreInfoClasses}>
          The moisture plump cotton, grown in dry USA climates is distinguished
          by its superb absorbency. The t-shirt is smooth and silky while still
          maintaining strength.
          <br />
          <br />
          The construction is completed in an Osaka factory - a remnent of
          heritage sportswear manufacturing. Deadstock, recycled cotton is spun
          in a special way to create slub (horizontal textural irregularities)
          on the fabric – the thin shadows on the seemingly flat fabric. Similar
          to t-shirts from the mid 90s.
        </p>
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
        <form action="">
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
            <button className={classes.viewAllBtn}>View All</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductOpen;
