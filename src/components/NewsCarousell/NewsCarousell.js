import React from "react";
import NewsCarousellItem from "./NewsCarousellItem";

import * as classes from "./NewsCarousell.module.css";

const NewsCarousell = (props) => {
  const newsList = props.posts.map((post) => (
    <NewsCarousellItem
      imgSrc={post.imgSrc}
      title={post.title}
      date={post.date}
      description={post.description}
      metaAuthor={post.metaAuthor}
      metaPhotographer={post.metaPhotographer}
    />
  ));

  return (
    <div className={classes.container}>
      <div className="leftPanel" />
      <div className="rightPanel" />
      <div className={classes.newsList}>
        <ul>{newsList}</ul>
      </div>
    </div>
  );
};

export default NewsCarousell;
