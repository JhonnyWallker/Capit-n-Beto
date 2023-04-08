import News from "../models/noticias.js";
import NewsLeyendas from "../models/leyendas.js";
import NewsHistorias from "../models/historias.js";
import NewsEsteros from "../models/esteros-del-ibera.js";
import * as dotenv from "dotenv";
import cloudinary from "cloudinary";
import fs from "fs-extra";
import alert from "alert";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get
export const getControllersNoticias = async (req, res) => {
  const news = await News.find();
  res.send({ status: "ok", results: news });
};
export const getControllersLeyendas = async (req, res) => {
  const newsLeyendas = await NewsLeyendas.find();
  res.send({ status: "ok", results: newsLeyendas });
};
export const getControllersHistorias = async (req, res) => {
  const news = await NewsHistorias.find();
  res.send({ status: "ok", results: news });
};
export const getControllersEsteros = async (req, res) => {
  const news = await NewsEsteros.find();
  res.send({ status: "ok", results: news });
};

//get id
export const oneNew = async (req, res) => {
  const { id } = req.params;
  const noticia = await News.findById(id);
  res.send({ noticia });
};

export const oneLegend = async (req, res) => {
  const { id } = req.params;
  const leyenda = await NewsLeyendas.findById(id);
  res.send({ leyenda });
};

export const oneHistory = async (req, res) => {
  const { id } = req.params;
  const historia = await NewsHistorias.findById(id);
  res.send({ historia });
};

export const oneEstero = async (req, res) => {
  const { id } = req.params;
  const estero = await NewsEsteros.findById(id);
  res.send({ estero });
};

//post
export const postControllersNoticias = async (req, res) => {
  if (req.file.size < 10000000) {
    const photo = await cloudinary.v2.uploader.upload(req.file.path);
    const { title, category, description, content, date } = req.body;
    const newNews = new News({
      image_url: photo.url,
      image_id: photo.public_id,
      title,
      category,
      description,
      content,
      file: req.body.file,
      date,
    });
    await newNews.save();
    console.log(newNews);
    console.log(req.file);

    res.redirect("/noticias");
  } else {
    alert("El archivo excede el tamaño permitido");
  }

  await fs.unlink(req.file.path);
};

export const postControllersLeyendas = async (req, res) => {
  if (req.file.size < 10000000) {
    const photo = await cloudinary.v2.uploader.upload(req.file.path);
    const {
      titleLegends,
      categoryLegends,
      descriptionLegends,
      contentLegends,
      dateLegends,
    } = req.body;
    const newLeyendas = new NewsLeyendas({
      image_url: photo.url,
      image_id: photo.public_id,
      titleLegends,
      categoryLegends,
      descriptionLegends,
      contentLegends,
      fileLegends: req.body.fileLegends,
      dateLegends,
    });
    await newLeyendas.save();
    console.log(req.file);

    res.redirect("/");
  } else {
    alert("El archivo excede el tamaño permitido");
  }

  await fs.unlink(req.file.path);
};

export const postControllersHistorias = async (req, res) => {
  if (req.file.size < 10000000) {
    const photo = await cloudinary.v2.uploader.upload(req.file.path);
    const {
      titleHistory,
      categoryHistory,
      descriptionHistory,
      contentHistory,
      dateHistory,
    } = req.body;
    const newHistoria = new NewsHistorias({
      image_url: photo.url,
      image_id: photo.public_id,
      titleHistory,
      categoryHistory,
      descriptionHistory,
      contentHistory,
      fileHistory: req.body.fileHistory,
      dateHistory,
    });
    await newHistoria.save();

    res.redirect("/historias");
  } else {
    alert("El archivo excede el tamaño permitido");
  }

  await fs.unlink(req.file.path);
};

export const postControllersEsyerosDeliberas = async (req, res) => {
  if (req.file.size < 10000000) {
    const photo = await cloudinary.v2.uploader.upload(req.file.path);
    const {
      titleEsteros,
      categoryEsteros,
      descriptionEsteros,
      contentEsteros,
      dateEsteros,
    } = req.body;
    const newEsteros = new NewsEsteros({
      image_url: photo.url,
      image_id: photo.public_id,
      titleEsteros,
      categoryEsteros,
      descriptionEsteros,
      contentEsteros,
      fileEsteros: req.body.fileEsteros,
      dateEsteros,
    });
    await newEsteros.save();

    res.redirect("/esteros-del-ibera");
  } else {
    alert("El archivo excede el tamaño permitido");
  }

  await fs.unlink(req.file.path);
};

//put
export const putControllers = (req, res) => {
  res.send("actualizando datos");
};

//delete
export const deleteControllers = (req, res) => {
  res.send("eliminando datos");
};
