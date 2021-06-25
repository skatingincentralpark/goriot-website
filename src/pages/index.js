import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout/layout";

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage
        className="heroImage"
        src="../images/laughing.png"
        alt="Girl Laughing"
        placeholder="blurred"
        layout="fixed"
        width={767 / 2}
        height={917 / 2}
      />
    </Layout>
  );
};

export default IndexPage;
