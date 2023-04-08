import { Router } from "express";
import {
  postControllersNoticias,
  postControllersLeyendas,
  postControllersHistorias,
  postControllersEsyerosDeliberas,
} from "../controllers/allControllers.js";

const router = Router();

router.post("/post/noticias", postControllersNoticias);
router.post("/post/leyendas", postControllersLeyendas);
router.post("/post/historias", postControllersHistorias);
router.post("/post/esteros-del-ibera", postControllersEsyerosDeliberas);

export default router;
