import React, { FC, useMemo } from "react";
import { monthDayTime } from "../../../../utils";
import { PostTitle } from "./post-title";
import { useRouter } from "../../../../router";
import classNames from "classnames";

interface PostProps {
  post: {
    id: number;
    title: string;
    timestamp: string;
    body: string;
  };
  index: number;
}

const Post: FC<PostProps> = ({ post, index }) => {
  const { title, timestamp, body, id } = post;
  const { getPostTo } = useRouter();

  const to = useMemo(() => getPostTo(id), [id, getPostTo]);

  return (
    <div
      className={classNames("pb5 w-100", {
        pt5: index !== 0,
      })}
      id={`${id}`}
    >
      <PostTitle to={to} title={title} />
      <p className="ma0 f6 tc light-silver">{monthDayTime(timestamp)}</p>
      <div className="h5"></div>
      <p className="ph2 f5 lh-copy tracked">{body}</p>
    </div>
  );
};

export default Post;
