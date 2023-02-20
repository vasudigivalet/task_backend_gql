"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherCollection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const teacherSchema = new mongoose_1.default.Schema({
    teacherName: {
        type: String,
        required: true,
    },
    classIds: (Array),
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
exports.teacherCollection = mongoose_1.default.model('teacher', teacherSchema);
