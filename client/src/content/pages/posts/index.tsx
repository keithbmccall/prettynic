import React from "react";
import { Page } from "../page";
import { usePostQuery } from "../../../data";
import { Loading } from "../../components/loading";
import Post from "./components/post";

const PostsPage = () => {
  const { post, isLoading } = usePostQuery();

  return (
    <Page>
      {isLoading || !post ? (
        <Loading />
      ) : (
        <div className="w-90">
          <Post post={post} index={1} />
        </div>
      )}
    </Page>
  );
};

export default PostsPage;
