import { useQuery } from "react-query";
import { fetchQuery } from "../../fetch";

export type AuthorType = {
  id: string;
  firstName: string;
  lastName: string;
};

interface QueryData {
  getAuthors: AuthorType[];
}

const queryAuthors = async (): Promise<QueryData> => {
  const query = `
    query {
        getAuthors {
            id
            firstName
            lastName
        }
    }`;

  const res = await fetchQuery(query);

  return res.data;
};

export const useAuthorsQuery = (queryKey: string = "getAuthors") => {
  const { data, error, isLoading } = useQuery(queryKey, queryAuthors);

  return {
    authors: data?.getAuthors ?? [],
    error,
    isLoading,
  };
};
