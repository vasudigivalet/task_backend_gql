import { ApolloServer } from "@apollo/server";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";

// import { printSchema } from "graphql";

export const typeDefs = loadSchemaSync('../**/*.gql', {
  loaders: [new GraphQLFileLoader()],
});

// console.log(printSchema(typeDefs));
