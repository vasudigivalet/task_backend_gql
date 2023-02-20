"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentCollection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_1 = require("mongodb");
const studentSchema = new mongoose_1.default.Schema({
    studentName: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
    },
    classId: {
        type: mongodb_1.ObjectId,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.studentCollection = mongoose_1.default.model('students', studentSchema);
