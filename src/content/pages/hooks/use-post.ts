import { usePosts } from '@providers';
import { useMemo } from 'react';
import { useRouter } from './use-router';

export const usePost = (postId?: string) => {
  const posts = usePosts();
  const { routeParams } = useRouter();
  const id = postId ?? routeParams?.id;

  return useMemo(() => {
    return posts?.find(p => p?.id === id);
  }, [id, posts]);
};
