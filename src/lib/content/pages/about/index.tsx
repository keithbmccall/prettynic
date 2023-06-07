import { Title } from '@components/text';
import { useAbout } from '@providers';
import { ContentBlocks } from '../../components/content-blocks/content-blocks';
import { Page } from '../page';

export const AboutPage = () => {
  const about = useAbout();

  console.log({ about });

  return (
    <Page flush>
      {about && (
        <div>
          <Title text={about.title} className="tc" />
          <ContentBlocks content={about.content} />
        </div>
      )}
    </Page>
  );
};
