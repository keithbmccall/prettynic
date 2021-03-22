const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const { Authors } = require("./queries/authors");
const { Posts } = require("./queries/posts");
const PORT = 3700;

const typeDefs = `
    type Author {
        id:ID!
        firstName: String!
        lastName: String!
    }
    type Post {
      id:ID!
      title:String!
      timestamp:String!
      body:String!
      author: Author
    }
    type Query {
        getAuthors:[Author],
        getPosts: [Post],
        getPost(id: ID!): Post
    }
`;

const resolvers = {
  Query: {
    ...Authors.queries,
    ...Posts.queries,
  },
};

const app = express();

app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({
  app,
  path: "/graphql",
});

app.listen(PORT, () => {
  console.log(`Server ready at ${PORT} ${server.graphqlPath}`);
});
