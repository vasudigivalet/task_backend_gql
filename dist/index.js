"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./database/db/connection");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const resolvers_1 = require("./graphQl/resolvers/resolvers");
const type_defs_1 = require("./graphQl/type-defs/type-defs");
// import cors from "cors";
const executeMain = () => __awaiter(void 0, void 0, void 0, function* () {
    // dotenv.config();
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new server_1.ApolloServer({
        typeDefs: type_defs_1.typeDefs,
        resolvers: resolvers_1.resolvers,
    });
    // Passing an ApolloServer instance to the `startStandaloneServer` function:
    //  1. creates an Express app
    //  2. installs your ApolloServer instance as middleware
    //  3. prepares your app to handle incoming requests
    const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
});
executeMain().catch((error) => {
    console.log(error, "error");
});
