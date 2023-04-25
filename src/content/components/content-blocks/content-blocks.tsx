import { DC } from '@global-types';
import { useIsDarkMode, usePlatformContext } from '@providers';
import classNames from 'classnames';
import { BlockImage } from '../images';
import { parseContent } from './parse-content';

interface ContentBlocksProps {
  content: {
    html: string;
  };
  containerClassName?: string;
}

export const ContentBlocks: DC<ContentBlocksProps> = ({
  content,
  containerClassName,
}) => {
  const { isMobile } = usePlatformContext();
  const isDarkMode = useIsDarkMode();

  return (
    <>
      {parseContent(content.html, domNode => {
        if (domNode?.name === 'img') {
          const image = domNode.attribs;

          const size = isMobile ? {} : {}; // { height: image.height, width: image.width };

          return (
            <div
              className={classNames(
                'justify-center flex flex-column f6 f5-l',
                containerClassName,
                { 'dark-mode': isDarkMode },
              )}
            >
              <BlockImage
                src={image.src}
                alt={image.title}
                {...size}
                className="mv2"
              />
            </div>
          );
        }
        return undefined;
      })}
    </>
  );
};
