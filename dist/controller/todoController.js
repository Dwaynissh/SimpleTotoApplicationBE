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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCombine = exports.getAllTask = exports.moveTodoToDone = exports.moveTodoToProgress = exports.deleteTodo = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const enums_1 = require("../utils/enums");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, desc, priority, dueDate, date } = req.body;
        const createTask = yield todoModel_1.default.create({
            title,
            desc,
            priority,
            dueDate,
            date,
        });
        return res.status(enums_1.http.Created).json({
            message: "todo task created successfully",
            data: createTask,
        });
    }
    catch (error) {
        return res.status(enums_1.http.Bad_Request).json({
            message: "error creating todo task",
            status: enums_1.http.Bad_Request,
            data: error,
        });
    }
});
exports.createTodo = createTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ID } = req.params;
        const deleteTask = yield todoModel_1.default.findByIdAndDelete(ID);
        return res.status(enums_1.http.Ok).json({
            message: "todo task deleted successfully",
            data: deleteTask,
        });
    }
    catch (error) {
        return res.status(enums_1.http.Bad_Request).json({
            message: "error deleting todo task",
            status: enums_1.http.Bad_Request,
            data: error,
        });
    }
});
exports.deleteTodo = deleteTodo;
const moveTodoToProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ID } = req.params;
        const createTask = yield todoModel_1.default.findByIdAndUpdate(ID, { progress: true }, { new: true });
        return res.status(enums_1.http.Ok).json({
            message: "todo task created successfully",
            data: createTask,
        });
    }
    catch (error) {
        return res.status(enums_1.http.Bad_Request).json({
            message: "error creating todo task",
            status: enums_1.http.Bad_Request,
            data: error,
        });
    }
});
exports.moveTodoToProgress = moveTodoToProgress;
const moveTodoToDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ID } = req.params;
        const findTask = yield todoModel_1.default.findById(ID);
        if (findTask === null || findTask === void 0 ? void 0 : findTask.progress) {
            const createTask = yield todoModel_1.default.findByIdAndUpdate(ID, { done: true }, { new: true });
            return res.status(enums_1.http.Ok).json({
                message: "todo task created successfully",
                data: createTask,
            });
        }
        else {
            return res.status(enums_1.http.Ok).json({
                message: "Todo Task must start first",
            });
        }
    }
    catch (error) {
        return res.status(enums_1.http.Bad_Request).json({
            message: "error creating todo task",
            status: enums_1.http.Bad_Request,
            data: error,
        });
    }
});
exports.moveTodoToDone = moveTodoToDone;
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getall = yield todoModel_1.default.find();
        return res.status(enums_1.http.Ok).json({
            message: "todo task created successfully",
            data: getall,
        });
    }
    catch (error) {
        return res.status(enums_1.http.Bad_Request).json({
            message: "error creating todo task",
            status: enums_1.http.Bad_Request,
            data: error,
        });
    }
});
exports.getAllTask = getAllTask;
const getAllCombine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTask = yield todoModel_1.default.find();
        const getAllTask = getTask.filter((el) => {
            return el.progress === false && el.done === false;
        });
        const getAllProgress = getTask.filter((el) => {
            return el.progress === true && el.done === false;
        });
        const getAllDone = getTask.filter((el) => {
            return el.progress === true && el.done === true;
        });
        let allData = {
            task: getAllTask,
            progress: getAllProgress,
            done: getAllDone,
        };
        return res.status(201).json({
            message: "todo task created successfully",
            data: allData,
        });
    }
    catch (error) {
        return res.status(enums_1.http.Bad_Request).json({
            message: "error creating todo task",
            status: enums_1.http.Bad_Request,
            data: error,
        });
    }
});
exports.getAllCombine = getAllCombine;
