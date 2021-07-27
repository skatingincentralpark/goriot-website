import React, { Fragment, useState } from "react";

import * as classes from "./ExtraOptions.module.css";

const ExtraOptions = (props) => {
  const [extraOptions, setExtraOptions] = useState({
    sizing: false,
    moreinfo: false,
    lookbook: false,
  });

  const sizingClasses = extraOptions.sizing
    ? `${classes.moreInfo} ${classes.show}`
    : `${classes.moreInfo}`;

  const extraOptionsClasses = extraOptions.moreinfo
    ? `${classes.moreInfo} ${classes.show}`
    : `${classes.moreInfo}`;

  const lookbookClasses = extraOptions.moreinfo
    ? `${classes.moreInfo} ${classes.show}`
    : `${classes.moreInfo}`;

  const moreInfoHandler = () => {
    setExtraOptions((prev) => ({
      sizing: false,
      moreinfo: !prev.moreinfo,
      lookbook: false,
    }));
  };

  const sizingHandler = () => {
    setExtraOptions((prev) => ({
      sizing: !prev.sizing,
      moreinfo: false,
      lookbook: false,
    }));
  };

  const lookbookHandler = () => {
    setExtraOptions((prev) => ({
      sizing: false,
      moreinfo: false,
      lookbook: !prev.lookbook,
    }));
  };

  return (
    <Fragment>
      <div className={classes.productExtra}>
        <button onClick={sizingHandler}>Sizing</button>
        <button onClick={moreInfoHandler}>More Info</button>
        <button>Lookbook</button>
      </div>
      <div className={extraOptionsClasses}>
        <p>
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
      </div>
      <div className={sizingClasses}>
        <div className={classes.sizeChart}>
          <table className={classes.sizeTable}>
            <thead>
              <tr>
                <th></th>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
                <th>Extra Large</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Length (cm)</td>
                <td>61cm</td>
                <td>63cm</td>
                <td>65cm</td>
                <td>67cm</td>
              </tr>
              <tr>
                <td>Chest (cm)</td>
                <td>49cm</td>
                <td>51cm</td>
                <td>53cm</td>
                <td>55cm</td>
              </tr>
              <tr>
                <td>Shoulder (cm)</td>
                <td>43cm</td>
                <td>45cm</td>
                <td>47cm</td>
                <td>49cm</td>
              </tr>
              <tr>
                <td>Sleeve (cm)</td>
                <td>26cm</td>
                <td>26cm</td>
                <td>27cm</td>
                <td>28cm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ExtraOptions;
