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
exports.deleteStudent = exports.updateStudent = exports.displayStudentByID = exports.displayStudent = exports.createstudent = void 0;
const mongodb_1 = require("mongodb");
const student_model_1 = require("../database/model/student.model");
//create Student
const createstudent = (parents, args) => {
    const studentcollection = new student_model_1.studentCollection(args.input);
    return studentcollection.save();
};
exports.createstudent = createstudent;
// display Student
const displayStudent = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.studentCollection.find();
});
exports.displayStudent = displayStudent;
//Display Student by ID
const displayStudentByID = (parents, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.studentCollection.findById(new mongodb_1.ObjectId(args.id));
});
exports.displayStudentByID = displayStudentByID;
//Update Student by ID
const updateStudent = (parents, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.studentCollection.findByIdAndUpdate(args.id, args.input, {
        new: true,
    });
});
exports.updateStudent = updateStudent;
//Delete Student by ID
const deleteStudent = (parents, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield student_model_1.studentCollection.findByIdAndRemove(args.id);
});
exports.deleteStudent = deleteStudent;
