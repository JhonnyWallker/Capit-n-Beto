import { Router } from "express";
import {
  deleteControllersNoticias,
  deleteControllersLeyendas,
  deleteControllersHistorias,
  deleteControllersEsteros,
} from "../controllers/allControllers.js";

const router = Router();

router.get("/delete/noticia/:id", deleteControllersNoticias);
router.get("/delete/leyenda/:id", deleteControllersLeyendas);
router.get("/delete/historia/:id", deleteControllersHistorias);
router.get("/delete/esteros-del-ibera/:id", deleteControllersEsteros);

export default router;
