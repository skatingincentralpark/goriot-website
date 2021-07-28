import React from "react";

// import Header from "../components/header/header";
import headerNew from "../components/headerNew/headerNew";
import Transition from "../components/Transition/Transition";

import "./layout.css";

const Layout = (props) => {
  return (
    <Transition location={props.location}>
      <div className="layout">
        <headerNew />
        {props.children}
      </div>
    </Transition>
  );
};

export default Layout;
