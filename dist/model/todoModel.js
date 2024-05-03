"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoModel = new mongoose_1.Schema({
    title: {
        type: String,
    },
    progress: {
        type: Boolean,
        default: false,
    },
    done: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
// const todoModel = new Schema(
//   {
//     todo: {
//       type: [],
//     },
//     progress: {
//       type: [],
//     },
//     done: {
//       type: [],
//     },
//   },
//   { timestamps: true }
// );
exports.default = (0, mongoose_1.model)("todo", todoModel);
