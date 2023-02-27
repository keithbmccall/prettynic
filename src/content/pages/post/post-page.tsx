import { usePost } from '../hooks';
import { Page } from '../page';
import Post from './components/post';

const PostsPage = () => {
  const post = usePost();

  return <Page flush>{post && <Post post={post} />}</Page>;
};

export default PostsPage;
