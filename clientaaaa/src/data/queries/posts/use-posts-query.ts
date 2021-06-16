import { useQuery } from "react-query";
import { fetchQuery } from "../../fetch";
import { PostType } from "./types";

interface GetPostsQueryData {
  posts: PostType[];
}

const queryPosts = async (): Promise<GetPostsQueryData> => {
  const query = `
    query {
        posts {
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

  const res = await fetchQuery(query);

  return res.data;
};

export const usePostsQuery = (): {
  posts?: PostType[];
  error: unknown;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useQuery("get-posts", queryPosts, {
    staleTime: 3600000, // 1 hr
  });

  return {
    posts: data?.posts,
    error,
    isLoading,
  };
};
