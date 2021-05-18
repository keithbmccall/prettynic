import React, { FC } from "react";
import { Loading } from "../../../components/loading";
import Post from "../../post/components/post";
import { usePosts } from "../../../../state";

const HomePosts: FC = () => {
  const posts = usePosts();

  console.log({ posts });
  return (
    <div className="w-90">
      {!posts ? (
        <Loading />
      ) : (
        posts.map((post, i) => <Post post={post} key={post.id} index={i} />)
      )}
    </div>
  );
};

export default HomePosts;
