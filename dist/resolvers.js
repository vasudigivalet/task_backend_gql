"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const load_files_1 = require("@graphql-tools/load-files");
// import { printSchema } from "graphql";
exports.resolver = (0, load_files_1.loadFiles)('./graphQl/resolvers/resolvers.ts');
// console.log(printSchema(typeDefs));
