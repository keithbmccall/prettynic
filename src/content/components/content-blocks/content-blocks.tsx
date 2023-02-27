import { BlockImage } from '../images/block-image';
import { DC } from '@global-types';
import { useIsDarkMode, usePlatformContext } from '@providers';
import classNames from 'classnames';
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
    <div
      className={classNames(
        'justify-center flex flex-column',
        containerClassName,
        { 'dark-mode': isDarkMode, f6: isMobile, f5: !isMobile },
      )}
    >
      {parseContent(content.html, domNode => {
        if (domNode?.name === 'img') {
          const image = domNode.attribs;

          const size = isMobile ? {} : {}; // { height: image.height, width: image.width };

          return (
            <BlockImage
              src={image.src}
              alt={image.title}
              {...size}
              className="mv2"
            />
          );
        }
        return undefined;
      })}
    </div>
  );
};
