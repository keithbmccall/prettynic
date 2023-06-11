import { Navbar } from '@components/header';
import { DataProvider, PlatformContextProvider } from '@providers';
import { Layout } from '../content/components/layout';
import ContentRouter from '../router';

const Root = () => {
  return (
    <PlatformContextProvider>
      <DataProvider>
        <Layout>
          <Navbar />
          <ContentRouter />
        </Layout>
      </DataProvider>
    </PlatformContextProvider>
  );
};

export default Root;
