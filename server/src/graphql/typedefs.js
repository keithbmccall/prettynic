import {gql} from "apollo-server-express";

export const typeDefs = gql`
    type Author {
        id: ID!
        firstName: String!
        lastName: String!
    }
    type Post {
        id: ID!
        title: String!
        timestamp: String!
        body: String!
        author: Author
    }
    type Query {
        getAuthors: [Author]
        getPosts: [Post]
        getPost(id: ID!): Post
    }
`;
