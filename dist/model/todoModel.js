"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoModel = new mongoose_1.Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    priority: {
        type: String,
    },
    dueDate: {
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
exports.default = (0, mongoose_1.model)("todo", todoModel);
