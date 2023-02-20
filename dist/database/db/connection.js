"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
// import DATABASE from "../../config.json";
dotenv_1.default.config({ path: './.env' });
const DB = process.env.DATABASE;
mongoose_1.default.set('strictQuery', true);
mongoose_1.default
    .connect(DB)
    .then(() => {
    console.log('connection successful');
})
    .catch((err) => console.log('no connection', err));
