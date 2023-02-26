import { Loading } from '@components/loading';
import { DC } from '@global-types';
import { usePosts } from '../../../../providers/state';
import Post from '../../post/components/post';

const HomePosts: DC = () => {
  const posts = usePosts();

  return (
    <div className="w-90">
      {posts ? (
        posts.map((post, i) => <Post post={post} key={post.id} index={i} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HomePosts;
