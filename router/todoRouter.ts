import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  getTodo,
} from "../controller/todoController";

const router: Router = Router();

router.route("/create-todo").post(createTodo);
router.route("/delete-todo/:id").delete(deleteTodo);
router.route("/get-one-todo/:id").get(getTodo);
router.route("/getall").get(getAllTodo);

export default router;
