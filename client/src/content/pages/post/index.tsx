
import {Page} from "../page";
import {usePostQuery} from "../../../data";
import {Loading} from "../../components/loading";
import Post from "./components/post";
import {usePlatformContext} from "../../../providers/platform";

const PostsPage = () => {
  const { post, isLoading } = usePostQuery();
  const { isMobile } = usePlatformContext();

  return (
    <Page flush>{isLoading || !post ? <Loading /> : <Post post={post} />}</Page>
  );
};

export default PostsPage;
