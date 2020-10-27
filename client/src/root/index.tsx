import React from "react";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";

const Root = () => {
  return (
    <Layout>
      <Navbar></Navbar>
      <div style={{height:"200vh"}}>
        page
      </div>
    </Layout>
  );
};

export default Root;
