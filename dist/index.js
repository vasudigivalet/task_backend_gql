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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./database/db/connection");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const resolvers_1 = require("./graphQl/resolvers/resolvers");
const type_defs_1 = require("./type-defs");
// import { resolver } from "./resolvers";
// import cors from "cors";
const executeMain = () => __awaiter(void 0, void 0, void 0, function* () {
    // Required logic for integrating with Express
    const app = (0, express_1.default)();
    // Our httpServer handles incoming requests to our Express app.
    // Below, we tell Apollo Server to "drain" this httpServer,
    // enabling our servers to shut down gracefully.
    const httpServer = http_1.default.createServer(app);
    // Same ApolloServer initialization as before, plus the drain plugin
    // for our httpServer.
    const server = new server_1.ApolloServer({
        typeDefs: type_defs_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    // Ensure we wait for our server to start
    yield server.start();
    // Set up our Express middleware to handle CORS, body parsing,
    // and our expressMiddleware function.
    app.use('/', (0, cors_1.default)(), body_parser_1.default.json(), 
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    (0, express4_1.expressMiddleware)(server, {
        context: ({ req }) => __awaiter(void 0, void 0, void 0, function* () { return ({ token: req.headers.token }); }),
    }));
    // Modified server startup
    yield new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/`);
});
executeMain().catch((error) => {
    console.log(error, 'error');
});
