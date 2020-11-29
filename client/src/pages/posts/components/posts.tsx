import React, { FC } from "react";
import { PostType } from "./types";
import Post from "./post";

interface PostsProps {
  posts: PostType[];
  isHome?: boolean;
}

const Posts: FC<PostsProps> = ({ posts, isHome=false }) => {
  return (
    <div className="w-90">
      {posts.map((post) => {
        return <Post post={post} isHome={isHome}/>;
      })}
    </div>
  );
};

export default Posts;
