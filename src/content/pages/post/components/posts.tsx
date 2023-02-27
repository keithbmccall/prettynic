import { Loading } from '@components/loading';
import { DC } from '@global-types';
import { usePosts } from '@providers';
import Post from './post';

const Posts: DC = () => {
  const posts = usePosts();

  if (!posts) {
    return <Loading />;
  }

  return (
    <div id="posts">
      {posts.map((post, i) => (
        <Post post={post} key={post.id} index={i} />
      ))}
    </div>
  );
};

export default Posts;
