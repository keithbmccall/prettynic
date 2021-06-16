import {FC, useMemo} from "react";
import classNames from "classnames";
import {monthDayTime} from "../../../../utils";
import {useRouter} from "../../hooks";
import {PostType} from "../../../../data";
import {PostTitle} from "./post-title";
import {CoverImage} from "../../../components/images";
import {ContentBlocks} from "../../../components/content-blocks";
import {usePlatformContext} from "../../../../providers/platform";

interface PostProps {
  post: PostType;
  index?: number;
}

const Post: FC<PostProps> = ({ post, index = 0 }) => {
  const { title, content, coverImage, date, tags, author, id, slug } = post;
  const { getPostTo } = useRouter();
  const { isMobile } = usePlatformContext();
  console.log({
    index,
  });
  const to = useMemo(() => getPostTo(id), [id, getPostTo]);

  return (
    <div
      className={classNames("pb5 w-100", {
        pt5: index !== 0,
      })}
      id={`${id}`}
    >
      {isMobile && <CoverImage src={coverImage.url} alt={slug} />}
      <PostTitle to={to} title={title} className="w-90 center" />
      <p className="ma0 f6 tc light-silver w-90 center">{monthDayTime(date)}</p>
      {!isMobile && (
        <CoverImage src={coverImage.url} alt={slug} className="mt4" />
      )}
      <ContentBlocks content={content} containerClassName="w-90 center" />
    </div>
  );
};

export default Post;
