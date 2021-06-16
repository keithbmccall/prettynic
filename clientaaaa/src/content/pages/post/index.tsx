import { Page } from "../page";
import { usePostQuery } from "../../../data";
import { Loading } from "../../components/loading";
import { usePlatformContext } from "../../../providers/platform";
import Post from "./components/post";

const PostsPage = () => {
  const { post, isLoading } = usePostQuery();
  const { isMobile } = usePlatformContext();

  return (
    <Page flush>{isLoading || !post ? <Loading /> : <Post post={post} />}</Page>
  );
};

export default PostsPage;
