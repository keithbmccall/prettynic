import { Layout } from "@components/layout";
import { Navbar } from "@components/header";
import { PlatformContextProvider, StateContextProvider } from "@providers";
import ContentRouter from "@router";

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
