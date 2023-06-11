import { AllType } from '../types';

type UseAllQueryType = () => AllType & { error: unknown; isLoading: boolean };
//
// export const useAllQuery: UseAllQueryType = () => {
//   const { data, error, isLoading } = useQuery('get-all', queryAll, {
//     staleTime: 3600000, // 1 hr
//   });
//
//   return {
//     pages: data?.pages,
//     posts: data?.posts,
//     error,
//     isLoading,
//   };
// };
