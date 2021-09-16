import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";
import { connectDB } from "./db/connect.js";

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  app.use(bodyParser.json());
  app.use("*", cors());
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  connectDB();
  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
