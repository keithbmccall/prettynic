import React from "react";
import { Layout } from "../content/components/layout";
import { Navbar } from "../content/components/navbar";
import ContentRouter from "../router";
import { PlatformContextProvider } from "../platform";

const Root = () => {
  return (
    <PlatformContextProvider>
      <Layout>
        <Navbar />
        <ContentRouter />
      </Layout>
    </PlatformContextProvider>
  );
};

export default Root;
