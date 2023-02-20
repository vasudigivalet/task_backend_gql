import { ApolloServer } from "@apollo/server";
import { loadFiles } from "@graphql-tools/load-files";

// import { printSchema } from "graphql";

export const resolver = loadFiles('./graphQl/resolvers/resolvers.ts');

// console.log(printSchema(typeDefs));
