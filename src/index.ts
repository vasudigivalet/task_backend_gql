import "reflect-metadata";
import "./database/db/connection";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Express } from "express";
import { resolvers } from "./graphQl/resolvers/resolvers";
import { typeDefs } from "./graphQl/type-defs/type-defs";

// import cors from "cors";

const executeMain = async () => {
  // dotenv.config();

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server,{
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

executeMain().catch((error) => {
  console.log(error, "error");
});
