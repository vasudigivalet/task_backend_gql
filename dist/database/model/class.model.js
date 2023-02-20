"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classCollection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const classSchema = new mongoose_1.default.Schema({
    className: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    standard: {
        type: String,
        required: true
    },
}, { timestamps: true });
exports.classCollection = mongoose_1.default.model('classroom', classSchema);
