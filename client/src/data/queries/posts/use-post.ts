import { QueryKey, useQuery } from "react-query";
import { fetchQuery } from "../../fetch";
import { useRouter } from "../../../content/pages/hooks";
import { PostType } from "./types";

interface GetPostQueryData {
  getPost: PostType;
}

const queryPost = async (
  queryKey: QueryKey,
  id: string
): Promise<GetPostQueryData> => {
  const query = `
    query GetPosts($id: ID!) {
        getPost(id: $id) {
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

  const res = await fetchQuery(query, { id });

  return res.data;
};

export const usePostQuery = (
  postId?: string
): {
  post?: PostType;
  error: unknown;
  isLoading: boolean;
} => {
  const { routeParams } = useRouter();
  const id = postId ?? routeParams?.id;

  const { data, error, isLoading } = useQuery(["getPost", id], queryPost);

  return {
    post: data?.getPost,
    error,
    isLoading,
  };
};
