const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const PORT = 3700;

const authors = [
  {
    id: "1",
    firstName: "Nicole",
    lastName: "Wiltshire",
  },
  {
    id: "2",
    firstName: "Keith",
    lastName: "McCall",
  },
];

const types = `
    type Author {
        id:ID!
        firstName: String!
        lastName: String!
    }
    type Query {
        getAuthors:[Author]
    }
`;

const resolvers = {
  Query: {
    getAuthors: () => authors,
  },
};

const app = express();

app.use(cors());

const server = new ApolloServer({ typeDefs: types, resolvers });

server.applyMiddleware({
  app,
  path: "/graphql",
});

app.listen(PORT, () => {
  console.log(`Server ready at ${PORT} ${server.graphqlPath}`);
});
