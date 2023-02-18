"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
exports.resolvers = {
    Query: {
        books: () => books,
    },
};
