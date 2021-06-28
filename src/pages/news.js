import React from "react";

import NewsCarousell from "../components/NewsCarousell/NewsCarousell";

const DUMMY_POSTS = [
  {
    imgSrc: "../images/stanley.jpeg",
    title: "Smile Gondola",
    date: "25/06/2021",
    description:
      "From Viktor Frankl, digitally disfigured portraits, weapons, 60s black civil rights slogans, Sun Tzu and a nod to Pokemon.  Our new capsule aims to represent something special for people who enjoy any of these subjects.",
    metaAuthor: "John Doe",
    metaPhotographer: "John Doe",
  },
  {
    imgSrc: "../images/stanley.jpeg",
    title: "Smile Gondola",
    date: "25/06/2021",
    description:
      "From Viktor Frankl, digitally disfigured portraits, weapons, 60s black civil rights slogans, Sun Tzu and a nod to Pokemon.  Our new capsule aims to represent something special for people who enjoy any of these subjects.",
    metaAuthor: "John Doe",
    metaPhotographer: "John Doe",
  },
  {
    imgSrc: "../images/stanley.jpeg",
    title: "Smile Gondola",
    date: "25/06/2021",
    description:
      "From Viktor Frankl, digitally disfigured portraits, weapons, 60s black civil rights slogans, Sun Tzu and a nod to Pokemon.  Our new capsule aims to represent something special for people who enjoy any of these subjects.",
    metaAuthor: "John Doe",
    metaPhotographer: "John Doe",
  },
  {
    imgSrc: "../images/stanley.jpeg",
    title: "Smile Gondola",
    date: "25/06/2021",
    description:
      "From Viktor Frankl, digitally disfigured portraits, weapons, 60s black civil rights slogans, Sun Tzu and a nod to Pokemon.  Our new capsule aims to represent something special for people who enjoy any of these subjects.",
    metaAuthor: "John Doe",
    metaPhotographer: "John Doe",
  },
];

const NewsPage = (props) => {
  return (
    <div>
      <NewsCarousell posts={DUMMY_POSTS} />
    </div>
  );
};

export default NewsPage;
