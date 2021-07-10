import { FC } from "react";
import classNames from "classnames";
import { monthDayTime } from "@utils";
import { PostType } from "@data";
import { CoverImage } from "@components/images";
import { ContentBlocks } from "@components/content-blocks";
import { usePlatformContext } from "@providers";
import { Time } from "@components/text";
import { Divider } from "@components/pieces";
import { useGetPostTo } from "../../hooks";
import { PostTitle } from "./post-title";

interface PostProps {
  post: PostType;
  index?: number;
}

const Post: FC<PostProps> = ({
  post: { title, content, coverImage, date, id, slug },
  index = 0,
}) => {
  const { isMobile } = usePlatformContext();

  const to = useGetPostTo(id);

  return (
    <div
      className={classNames("pb2 w-100", {
        pt2: index !== 0,
      })}
      id={`${id}`}
    >
      {isMobile && (
        <CoverImage src={coverImage.url} alt={slug} className="pb4" />
      )}
      <PostTitle to={to} text={title} className="w-90 center f1" />
      <Time
        className={classNames({ pb3: isMobile, pb1: !isMobile })}
        time={monthDayTime(date)}
      />
      {!isMobile && (
        <CoverImage src={coverImage.url} alt={slug} className="mt4 pb4" />
      )}
      <Divider width="1px" />
      <ContentBlocks content={content} containerClassName="w-90 center pt2" />
    </div>
  );
};

export default Post;
