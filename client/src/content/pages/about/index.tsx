import { useAbout } from "@providers";
import { ContentBlocks } from "@components/content-blocks";
import { Title } from "@components/text";
import { Page } from "../page";

export const AboutPage = () => {
  const about = useAbout();

  console.log({ about });

  return (
    <Page flush>
      {about && (
        <>
          <Title text={about.title} />
          <ContentBlocks content={about.content} />
        </>
      )}
    </Page>
  );
};
