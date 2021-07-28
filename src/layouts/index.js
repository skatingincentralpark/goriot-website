import React from "react";

// import Header from "../components/header/header";
import Header2 from "../components/header2/header2";
import Transition from "../components/Transition/Transition";

import "./layout.css";

const Layout = (props) => {
  return (
    <Transition location={props.location}>
      <div className="layout">
        <Header2 />
        {props.children}
      </div>
    </Transition>
  );
};

export default Layout;
