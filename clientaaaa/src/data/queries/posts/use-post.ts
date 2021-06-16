import { QueryKey, useQuery } from "react-query";
import { fetchQuery } from "../../fetch";
import { useRouter } from "../../../content/pages/hooks";
import { PostType } from "./types";

interface GetPostQueryData {
  post: PostType;
}

const queryPost = async (
  queryKey: QueryKey,
  id: string
): Promise<GetPostQueryData> => {
  console.log({ id });
  const query = `
    query GetPosts($id: ID!) {
        post(where : { id: $id}) {
            id
            title
            slug
            date
            updatedAt
            coverImage {
              id
              fileName
              height
              width
              url
            }
            publishedAt
            excerpt
            tags
            author {
              name
              title
              picture {
                id
                url
                fileName
                width
                height
              }
            }
            content {
              raw
              html
              markdown
              text
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

  const { data, error, isLoading } = useQuery(["get-post", id], queryPost, {
    staleTime: Infinity, // 1 hr
  });
  console.log({ data });
  return {
    post: data?.post,
    error,
    isLoading,
  };
};
