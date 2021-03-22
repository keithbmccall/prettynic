import { useQuery } from "react-query";
import { fetchQuery } from "../../fetch";
import { PostType } from "./types";

interface GetPostsQueryData {
  getPosts: PostType[];
}

const queryPosts = async (): Promise<GetPostsQueryData> => {
  const query = `
    query {
        getPosts {
            id
            title
            timestamp
            body
            author {
                id
                firstName
                lastName
            }
        }
    }`;

  const res = await fetchQuery(query);

  return res.data;
};

export const usePostsQuery = (): {
  posts?: PostType[];
  error: unknown;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useQuery("getPosts", queryPosts);

  return {
    posts: data?.getPosts,
    error,
    isLoading,
  };
};
