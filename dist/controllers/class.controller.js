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
exports.deleteClass = exports.updateClass = exports.displayClassByID = exports.displayClass = exports.createclass = void 0;
const mongodb_1 = require("mongodb");
const class_model_1 = require("../database/model/class.model");
//create class
const createclass = (parents, args) => {
    const classcollection = new class_model_1.classCollection(args.input);
    return classcollection.save();
};
exports.createclass = createclass;
// display class
const displayClass = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield class_model_1.classCollection.find();
});
exports.displayClass = displayClass;
//Display class by ID
const displayClassByID = (parents, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield class_model_1.classCollection.findById(new mongodb_1.ObjectId(args.id));
});
exports.displayClassByID = displayClassByID;
//Update class by ID
const updateClass = (parents, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield class_model_1.classCollection.findByIdAndUpdate(args.id, args.input, {
        new: true,
    });
});
exports.updateClass = updateClass;
//Delete class by ID
const deleteClass = (parents, args) => __awaiter(void 0, void 0, void 0, function* () {
    return yield class_model_1.classCollection.findByIdAndRemove(args.id);
});
exports.deleteClass = deleteClass;
