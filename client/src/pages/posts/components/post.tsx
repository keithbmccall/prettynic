import React, { FC, useMemo } from "react";

import { monthDayTime } from "../../../utils";
import { PostTitle } from "./post-title";

interface PostProps {
  post: {
    id: number;
    title: string;
    timestamp: string;
    body: string;
  };
  isHome: boolean;
}

const Post: FC<PostProps> = ({ post, isHome }) => {
  const { title, timestamp, body, id } = post;

  return (
    <>
      <div className="pt2 mv3 w-100" id={`${id}`}>
        <PostTitle to={`/posts/${id}`} title={title} isHome={isHome} />
        <p className="ma0 f6 tc light-silver">{monthDayTime(timestamp)}</p>
        <div className="h5"></div>
        <p className="ph2 f5 lh-copy tracked">{body}</p>
      </div>
    </>
  );
};

export default Post;
