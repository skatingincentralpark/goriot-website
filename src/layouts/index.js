import React from "react";

import Header from "../components/header/header";
// import HeaderNew from "../components/headerNew/HeaderNew";
import Transition from "../components/Transition/Transition";

import "./layout.css";

const Layout = (props) => {
  return (
    <Transition location={props.location}>
      <div className="layout">
        <Header />
        {props.children}
      </div>
    </Transition>
  );
};

export default Layout;
