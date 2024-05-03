import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllCombine,
  getAllTask,
  moveTodoToDone,
  moveTodoToProgress,
} from "../controller/todoController";

const router: Router = Router();

router.route("/todo/createtodo").post(createTodo);
router.route("/todo/progress/:ID").post(moveTodoToProgress);
router.route("/todo/done/:ID").patch(moveTodoToDone);
router.route("/todo/delete/:ID").delete(deleteTodo);

router.route("/todo/get-combined").get(getAllCombine);
router.route("/todo/get-all").get(getAllTask);

export default router;
