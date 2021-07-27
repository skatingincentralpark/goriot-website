import React, { useState, useEffect } from "react";

import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import * as classes from "./Lookbook.module.css";
import LookbookItems from "./LookbookItems";

const Lookbook = (props) => {
  // Image state: full size + thumbnail arrays + current index
  const [imgState, setImgState] = useState({
    thumbnailImgArr: [],
    fullSizeImgArr: [],
    currIndex: 0,
  });

  const [showArchive, setShowArchive] = useState(false);

  // Fetching data for image state
  useEffect(() => {
    let thumbnailImageArray = [];
    props.data.thumbnails.edges.map((edge) =>
      thumbnailImageArray.push(edge.node)
    );

    let fullSizeImageArray = [];
    props.data.fullsize.edges.map((edge) =>
      fullSizeImageArray.push(getImage(edge.node))
    );

    setImgState({
      thumbnailImgArr: thumbnailImageArray,
      fullSizeImgArr: fullSizeImageArray,
      currIndex: 0,
    });
  }, [props.data.thumbnails.edges]);

  // Active index function
  const activeIndexHandler = (index) => {
    setImgState((prevState) => ({
      thumbnailImgArr: prevState.thumbnailImgArr,
      fullSizeImgArr: prevState.fullSizeImgArr,
      currIndex: index,
    }));
  };

  const showArchiveHandler = () => {
    setShowArchive(true);
    console.log(showArchive);
  };

  const hideArchiveHandler = () => {
    setShowArchive(false);
  };

  // Archive navigation conditional classes
  const archiveNavClass = showArchive
    ? `${classes.archiveLinks}`
    : `${classes.archiveLinks} ${classes.hide}`;

  return (
    <div className={classes.lookbookContainer}>
      <div className={classes.imageMainContainer}>
        <GatsbyImage
          image={imgState.fullSizeImgArr[imgState.currIndex]}
          alt="lookbook-main-picture"
        />
        <div>
          <p>
            {parseInt(imgState.currIndex) + 1}/{imgState.thumbnailImgArr.length}
            <br />
            <b>Spring / Summer 2021</b>
            <br />
            Spinning Ring ‘USA Cotton’ Tee
          </p>
        </div>
      </div>
      <div className={classes.imageNavContainer}>
        {imgState.thumbnailImgArr.map((node, i) => (
          <LookbookItems
            image={getImage(node)}
            id={node.id}
            activeIndexHandler={activeIndexHandler}
            key={node.id}
            index={i}
          />
        ))}
        <div className={classes.lookbookLinks}>
          <div className={classes.archiveDropdown}>
            <div
              onMouseEnter={showArchiveHandler}
              onMouseLeave={hideArchiveHandler}
              className={classes.archiveLabel}
              role="navigation"
            >
              Archive
            </div>
            <ul
              onMouseEnter={showArchiveHandler}
              onMouseLeave={hideArchiveHandler}
              className={archiveNavClass}
            >
              <li>
                <Link to="/lookbook/2021AW">2021AW</Link>
              </li>
              <li>
                <Link to="/lookbook/2020SS">2020SS</Link>
              </li>
            </ul>
          </div>

          <div className={classes.backBtn}>
            <Link to="/">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
