import { Router } from "express";
import {
  getControllersNoticias,
  getControllersLeyendas,
  getControllersHistorias,
  getControllersEsteros,
  oneNew,
  oneLegend,
  oneHistory,
  oneEstero,
} from "../controllers/allControllers.js";

const router = Router();

//all data
router.get("/api/noticias", getControllersNoticias);
router.get("/api/leyendas", getControllersLeyendas);
router.get("/api/historias", getControllersHistorias);
router.get("/api/esteros-del-ibera", getControllersEsteros);

//data id
router.get("/api/noticias/:id", oneNew);
router.get("/api/leyendas/:id", oneLegend);
router.get("/api/historias/:id", oneHistory);
router.get("/api/esteros-del-ibera/:id", oneEstero);

export default router;
