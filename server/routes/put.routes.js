import { Router } from "express";
import { putControllers } from "../controllers/allControllers.js";

const router = Router();

router.get("/put/:id", putControllers);

export default router;
