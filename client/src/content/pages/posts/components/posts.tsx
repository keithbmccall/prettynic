import React, { FC } from "react";
import Post from "./post";
import { getData } from "../../../../data";

const Posts: FC<any> = () => {
  const { posts } = getData();

  return (
    <div className="w-90">
      {posts.map((post, i) => {
        return <Post post={post} key={post.id} index={i}/>;
      })}
    </div>
  );
};

export default Posts;
