import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import Graph from "./graphql";
import mongoose from "mongoose";

const PORT = 3700;

(async () => {
  const app = express();

  // await mongoose.connect("mongodb://localhost:27017/prettynic", {
  //   useNewUrlParser: true,
  // });

  app.use(cors());

  const server = new ApolloServer(Graph);

  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  app.listen(PORT, () => {
    console.log(`Server ready at ${PORT} ${server.graphqlPath}`);
  });
})();
