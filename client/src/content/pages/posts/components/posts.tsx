import React, { FC } from "react";
import { usePostsQuery } from "../../../../data";
import { Loading } from "../../../components/loading";
import Post from "./post";

const Posts: FC = () => {
  const { posts, isLoading } = usePostsQuery();

  return (
    <div className="w-90">
      {isLoading || !posts ? (
        <Loading />
      ) : (
        posts.map((post, i) => {
          return <Post post={post} key={post.id} index={i} />;
        })
      )}
    </div>
  );
};

export default Posts;
