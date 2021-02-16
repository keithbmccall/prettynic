import React from "react";
import { Layout } from "../content/components/layout";
import { Navbar } from "../content/components/header";
import ContentRouter from "../router";
import { PlatformContextProvider } from "../platform";
import { StateContextProvider } from "../state";

const Root = () => {
  return (
    <PlatformContextProvider>
      <StateContextProvider>
        <Layout>
          <Navbar />
          <ContentRouter />
        </Layout>
      </StateContextProvider>
    </PlatformContextProvider>
  );
};

export default Root;
