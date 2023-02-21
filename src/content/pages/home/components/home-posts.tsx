import { Loading } from '@components/loading';
import { FC } from '@global-types';
import { usePosts } from '../../../../providers/state';
import Post from '../../post/components/post';

const HomePosts: FC = () => {
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
