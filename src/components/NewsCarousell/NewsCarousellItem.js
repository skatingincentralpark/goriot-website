import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as classes from "./NewsCarousellItem.module.css";

const NewsCarousellItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.img}>
        <StaticImage
          src="../../images/stanley.jpeg"
          placeholder="fade"
          quality={100}
          width={300}
          style={{
            display: "block",
            margin: "auto",
          }}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
      <div className={classes.text}>
        <small>June 11th, 2021</small>
        <h1 className={classes.title}>{props.title}</h1>
        <small className={classes.category}>News / Images </small>
        <p className={classes.description}>{props.description}</p>
        <small>{props.metaAuthor}</small>
        <small>{props.metaPhotographer}</small>
      </div>
    </li>
  );
};

export default NewsCarousellItem;
