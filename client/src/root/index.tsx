import React from "react";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";
import ContentRouter from "../router";

const Root = () => {
  return (
    <Layout>
      <Navbar />
      <ContentRouter />
    </Layout>
  );
};

export default Root;
