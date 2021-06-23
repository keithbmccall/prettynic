import { usePlatformContext } from "@providers";
import { Page } from "../page";
import { usePost } from "../hooks";
import Post from "./components/post";

const PostsPage = () => {
  const { isMobile } = usePlatformContext();

  const post = usePost();

  return <Page flush>{post && <Post post={post} />}</Page>;
};

export default PostsPage;
