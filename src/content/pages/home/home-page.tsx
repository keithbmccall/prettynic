import { DC } from '@global-types';
import { Page } from '../page';
import Posts from '../post/components/posts';

const HomePage: DC = () => {
  return (
    <Page>
      <Posts />
    </Page>
  );
};

export default HomePage;
