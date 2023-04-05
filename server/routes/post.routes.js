import { Router } from "express";
import { postControllersNoticias, postControllersLeyendas } from "../controllers/allControllers.js";

const router = Router();

router.post("/post/noticias", postControllersNoticias);
router.post("/post/leyendas", postControllersLeyendas);

export default router;
