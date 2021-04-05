import * as Authors from "./queries/authors";
import * as Posts from "./queries/posts";

export const resolvers = {
    Query: {
        ...Authors.queries,
        ...Posts.queries,
    },
};
