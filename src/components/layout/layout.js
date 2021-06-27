import React from "react";

import Header from "../Header/header";

import "./layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
