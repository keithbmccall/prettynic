import React from "react";
import { Page } from "../page";
import { usePostQuery } from "../../../data";
import { Loading } from "../../components/loading";
import Post from "./components/post";
import classNames from "classnames";
import { usePlatformContext } from "../../../platform";

const PostsPage = () => {
  const { post, isLoading } = usePostQuery();
  const { isMobile } = usePlatformContext();

  return (
    <Page flush>{isLoading || !post ? <Loading /> : <Post post={post} />}</Page>
  );
};

export default PostsPage;
