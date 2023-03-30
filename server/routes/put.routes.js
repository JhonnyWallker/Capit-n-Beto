import { Router } from "express";
import { putControllers } from "../controllers/allControllers.js";

const router = Router();

router.put("/put", putControllers);

export default router;
