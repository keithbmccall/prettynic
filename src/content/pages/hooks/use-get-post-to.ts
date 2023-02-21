import { useMemo } from 'react';
import { useRouter } from './use-router';

export const useGetPostTo = (id: string) => {
  const { getPostTo } = useRouter();

  return useMemo(() => getPostTo(id), [id, getPostTo]);
};
