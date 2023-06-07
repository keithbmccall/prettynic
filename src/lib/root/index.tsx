import { Navbar } from '@components/header';
import { PlatformContextProvider, StateContextProvider } from '@providers';
import { Layout } from '../content/components/layout';
import ContentRouter from '../router';

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
