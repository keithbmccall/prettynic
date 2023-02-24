import { usePosts } from '@providers';
import { useParams } from 'react-router-dom';

export const usePost = (postId?: string) => {
  const posts = usePosts();
  const { id: paramId } = useParams();
  const id: string | undefined = postId ?? paramId;

  return posts?.find(p => p?.id === id);
};
