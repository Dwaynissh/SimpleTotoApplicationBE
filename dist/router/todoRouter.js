"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controller/todoController");
const router = (0, express_1.Router)();
router.route("/todo/createtodo").post(todoController_1.createTodo);
router.route("/todo/progress/:ID").post(todoController_1.moveTodoToProgress);
router.route("/todo/done/:ID").patch(todoController_1.moveTodoToDone);
router.route("/todo/delete/:ID").delete(todoController_1.deleteTodo);
router.route("/todo/get-combined").get(todoController_1.getAllCombine);
router.route("/todo/get-all").get(todoController_1.getAllTask);
exports.default = router;