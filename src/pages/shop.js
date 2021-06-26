import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout/layout";
import Products from "../components/Products/Products";

const ShopPage = () => {
  return (
    <Layout>
      <Products />
    </Layout>
  );
};

export default ShopPage;
