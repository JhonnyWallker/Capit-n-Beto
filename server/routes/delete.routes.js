import { Router } from "express";
import { deleteControllers } from "../controllers/allControllers.js";

const router = Router();

router.delete("/delete", deleteControllers);

export default router;
