import { Router } from "express";
import { getControllers } from "../controllers/allControllers.js";

const router = Router();

router.get("/api", getControllers);

export default router;
