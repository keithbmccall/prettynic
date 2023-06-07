import { useQuery } from 'react-query';
import { fetchQuery } from '../../fetch';
import { PagesQuery } from '../pages';
import { PostsQuery } from '../posts';
import { AllType } from '../types';

type GetAllQueryData = AllType;

const queryAll = async (): Promise<GetAllQueryData> => {
  const query = `
    query {
        ${PostsQuery}
        ${PagesQuery}
    }`;

  const res = await fetchQuery(query);

  return res.data;
};

type UseAllQueryType = () => AllType & { error: unknown; isLoading: boolean };

export const useAllQuery: UseAllQueryType = () => {
  const { data, error, isLoading } = useQuery('get-all', queryAll, {
    staleTime: 3600000, // 1 hr
  });

  return {
    pages: data?.pages,
    posts: data?.posts,
    error,
    isLoading,
  };
};
