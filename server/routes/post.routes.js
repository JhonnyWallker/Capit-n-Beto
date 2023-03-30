import { Router } from "express";
import { postControllers } from "../controllers/allControllers.js";

const router = Router();

router.post("/post", postControllers);

export default router;
