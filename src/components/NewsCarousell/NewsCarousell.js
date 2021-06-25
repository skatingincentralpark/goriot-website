import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import NewsCarousellItem from "./NewsCarousellItem"

import * as classes from "./NewsCarousell.module.css"

const NewsCarousell = props => {
  const newsList = props.posts.map(post => (
    <NewsCarousellItem
      imgSrc={post.imgSrc}
      title={post.title}
      date={post.date}
      description={post.description}
      metaAuthor={post.metaAuthor}
      metaPhotographer={post.metaPhotographer}
    />
  ))

  return (
    <div className={classes.container}>
      <div className="leftPanel" />
      <div className="rightPanel" />
      <ul>{newsList}</ul>
    </div>
  )
}

export default NewsCarousell
