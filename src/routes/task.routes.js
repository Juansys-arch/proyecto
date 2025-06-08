import { Router } from "express";
import { getTasks, createtask, updatetask, deletetask} from "../controllers/task.controller.js";

const router = Router();
router.get("/tasks", getTasks)
router.post("/tasks", createtask);
router.put("/tasks/:id",updatetask)
router.delete("/tasks/:id",deletetask)
export default router;