import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./db/connect.js";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
const app = express();

server.applyMiddleware({ app });

app.use(bodyParser.json());
app.use("*", cors());

app.listen({ port: 4000 }, () => {
  connectDB();
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
