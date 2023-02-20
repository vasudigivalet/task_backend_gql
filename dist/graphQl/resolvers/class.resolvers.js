"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const class_controller_1 = require("../../controllers/class.controller");
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
exports.resolvers = {
    Query: {
        //class Query
        classes: class_controller_1.displayClass,
        class: class_controller_1.displayClassByID,
    },
    Mutation: {
        //class Mutation
        createClass: class_controller_1.createclass,
        updateClass: class_controller_1.updateClass,
        deleteClass: class_controller_1.deleteClass,
    },
};
