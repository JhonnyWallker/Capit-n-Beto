import express, {Router} from "express";

const router = Router();

router.use("/", express.static("./dist"));
router.use("/noticias", express.static("./dist"));
router.use("/historias", express.static("./dist"));
router.use("/esteros-del-ibera", express.static("./dist"));

export default router;
