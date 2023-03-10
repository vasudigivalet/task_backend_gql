"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const student_controller_1 = require("../../controllers/student.controller");
const class_controller_1 = require("../../controllers/class.controller");
// Resolvers define how to fetch the types defined in your schema.
exports.resolvers = {
    Query: {
        //class Query
        classes: class_controller_1.displayClass,
        class: class_controller_1.displayClassByID,
        //student Query
    },
    Mutation: {
        //class Mutation
        createClass: class_controller_1.createclass,
        updateClass: class_controller_1.updateClass,
        deleteClass: class_controller_1.deleteClass,
        //Student Mutation
        createStudent: student_controller_1.createstudent,
    },
};
