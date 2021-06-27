import React from "react";

import * as classes from "./AnnouncementBar.module.css";

const AnnouncementBar = () => {
  return (
    <div className={classes.announcementBar}>
      <p>
        <b>Notes</b>
        <br />
        <br />
        - Free stickers with every tee purchase.
        <br />
        - International shipping available. Please check FAQ for delivery times.
        <br />
        - On-body available here.
        <br />
      </p>
    </div>
  );
};

export default AnnouncementBar;
