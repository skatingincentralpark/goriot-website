import React, { useState } from "react";

import LookBookItems from "./LookbookItems";

const Lookbook = (props) => {
  return (
    <div>
      <div>main picture goes here</div>
      <ul>
        {props.lookbookImages.edges.map((edge) => (
          <div>
            <LookBookItems image={edge.image} id={edge.id} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Lookbook;
