import React, { FC } from "react";
import { getData } from "../../../../data";
import Post from "./post";

const Posts: FC = () => {
  const { posts } = getData();

  return (
    <div className="w-90">
      {posts.map((post, i) => {
        return <Post post={post} key={post.id} index={i} />;
      })}
    </div>
  );
};

export default Posts;
