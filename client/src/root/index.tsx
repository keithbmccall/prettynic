import { Navbar } from "@components/header";
import { PlatformContextProvider, StateContextProvider } from "@providers";
import ContentRouter from "@router";
import { Layout } from "../content/components/layout/layout";

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
