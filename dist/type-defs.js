"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const load_1 = require("@graphql-tools/load");
const graphql_1 = require("graphql");
exports.typeDefs = (0, load_1.loadSchemaSync)('../**/*.gql', {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
});
console.log((0, graphql_1.printSchema)(exports.typeDefs));
