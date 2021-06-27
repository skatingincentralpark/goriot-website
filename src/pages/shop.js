import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout/layout";
import Products from "../components/Products/Products";
import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";

const ShopPage = () => {
  return (
    <Layout>
      <Products />
      <AnnouncementBar />
    </Layout>
  );
};

export default ShopPage;
