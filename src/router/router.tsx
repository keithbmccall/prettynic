import { Route, Switch } from 'react-router-dom';
import { AboutPage } from '../content/pages/about';
import { ArchivePage } from '../content/pages/archive';
import { ContactPage } from '../content/pages/contact';
import HomePage from '../content/pages/home';
import PostsPage from '../content/pages/post';
import { LOCATIONS } from './urls';

const ContentRouter = () => {
  return (
    <Switch>
      <Route path={`${LOCATIONS.POST}:id`}>
        <PostsPage />
      </Route>
      <Route path={LOCATIONS.ABOUT}>
        <AboutPage />
      </Route>
      <Route path={LOCATIONS.ARCHIVE}>
        <ArchivePage />
      </Route>
      <Route path={LOCATIONS.CONTACT}>
        <ContactPage />
      </Route>
      <Route path={LOCATIONS.HOME}>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default ContentRouter;
