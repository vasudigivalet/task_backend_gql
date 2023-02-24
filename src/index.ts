import "reflect-metadata";
import "./database/db/connection";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";
import path from "path";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { resolvers } from "./graphQl/resolvers/index";
import { typeDefs } from "./graphQl/schema";

const { graphqlUploadExpress } = require('graphql-upload');

const port = 4000;

const executeMain = async () => {
  interface MyContext {
    token?: string;
  }

  const app = express();

  const httpServer = http.createServer(app);

  app.use(graphqlUploadExpress());

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    csrfPrevention: false,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  const staticpath = path.join(__dirname, './uploads');
  app.use(express.static(staticpath));
  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json(),

    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
    }),
  );
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/`);
};

executeMain().catch((error: Error) => {
  console.log(error, 'error');
});
