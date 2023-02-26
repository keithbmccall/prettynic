import { DC } from '@global-types';
import { Page } from '../page';
import HomePosts from './components/home-posts';

const HomePage: DC = () => {
  return (
    <Page>
      <HomePosts />
    </Page>
  );
};

export default HomePage;
