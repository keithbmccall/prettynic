import { ContentBlocks } from '@components/content-blocks';
import { CoverImage } from '../../../components/images/block-image';
import { Divider } from '@components/pieces';
import { Time, Title } from '@components/text';
import { PostType } from '@data';
import { DC } from '@global-types';
import { usePlatformContext } from '@providers';
import { monthDayTime } from '@utils';
import classNames from 'classnames';
import { LOCATIONS } from '../../../../router';
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
    <div
      className={classNames('pb2 w-100 bg-white pt4', {
        pt2: index !== 0,
      })}
      id={`${id}`}
    >
      {isMobile && coverImage && (
        <CoverImage src={coverImage.url} alt={slug} className="pb4" />
      )}
      <PostTitle
        to={to}
        text={title}
        className={classNames('w-90 center tc', {
          f1: !isMobile,
          f2: isMobile,
        })}
      />

      {!isMobile && coverImage && (
        <CoverImage src={coverImage.url} alt={slug} className="mt4 pb0" />
      )}

      <p className="tc f6 mv0 pb3 i w-90 center">Written by {author?.name}</p>
      <Divider width="1px" />
      <Title text={subtitle} className="pt3 tl center w-90" />
      <Time
        className={classNames('tl', { pb0: isMobile, pb1: !isMobile })}
        time={monthDayTime(date)}
      />
      <ContentBlocks content={content} containerClassName="w-90 center pt2" />
      {/*<Divider width="40px" color="black" />*/}
      <div className="banner" />
    </div>
  );
};

export default Post;
