import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../content/pages/about';
import { ArchivePage } from '../content/pages/archive';
import { ContactPage } from '../content/pages/contact';
import HomePage from '../content/pages/home';
import PostsPage from '../content/pages/post';
import { LOCATIONS } from './urls';

const ContentRouter = () => {
  return (
    <Routes>
      <Route path={`${LOCATIONS.POST}:id`} element={<PostsPage />} />
      <Route path={LOCATIONS.ABOUT} element={<AboutPage />} />
      <Route path={LOCATIONS.ARCHIVE} element={<ArchivePage />} />
      <Route path={LOCATIONS.CONTACT} element={<ContactPage />} />
      <Route path={LOCATIONS.HOME} element={<HomePage />} />
    </Routes>
  );
};

export default ContentRouter;
