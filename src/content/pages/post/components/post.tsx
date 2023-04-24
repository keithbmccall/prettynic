import { ContentBlocks } from '@components/content-blocks';
import { Divider } from '@components/pieces';
import { Time, Title } from '@components/text';
import { PostType } from '@data';
import { DC } from '@global-types';
import { usePlatformContext } from '@providers';
import { monthDayTime } from '@utils';
import classNames from 'classnames';
import { LOCATIONS } from '../../../../router';
import { CoverImage } from '../../../components/images';
import { PostTitle } from './post-title';

interface PostProps {
  post: PostType;
  index?: number;
}

const Post: DC<PostProps> = ({
  post: { title, content, coverImage, date, id, slug, author, subtitle },
  index = 0,
}) => {
  const { isMobile } = usePlatformContext();

  const to = `${LOCATIONS.POST}${id}`;

  return (
    <>
      {isMobile && coverImage && <CoverImage src={coverImage.url} alt={slug} />}
      <div
        className={classNames('mt4 w-100 bg-white', {
          pt2: index !== 0,
        })}
        id={`${id}`}
      >
        <PostTitle
          to={to}
          text={title}
          className={classNames('center tc ph3', {
            f1: !isMobile,
            f2: isMobile,
          })}
        />
        <div className="ph3">
          {!isMobile && coverImage && (
            <CoverImage src={coverImage.url} alt={slug} className="mt4 pb0" />
          )}
          <p className="tc f6 mv0 pb3 i center">Written by {author?.name}</p>
        </div>

        <Divider width="1px" />
        <div className="ph3 mt3">
          <Title text={subtitle} className="tl center" />
          <Time
            className={classNames('tl', { pb0: isMobile, pb1: !isMobile })}
            time={monthDayTime(date)}
          />
          <ContentBlocks content={content} containerClassName="center mt2" />
          {/*<Divider width="40px" color="black" />*/}
        </div>
      </div>
    </>
  );
};

export default Post;
