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
  try {
    const news = await News.find();
    res.send({ status: "ok", results: news });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getControllersLeyendas = async (req, res) => {
  try {
    const newsLeyendas = await NewsLeyendas.find();
    res.send({ status: "ok", results: newsLeyendas });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getControllersHistorias = async (req, res) => {
  try {
    const news = await NewsHistorias.find();
    res.send({ status: "ok", results: news });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getControllersEsteros = async (req, res) => {
  try {
    const news = await NewsEsteros.find();
    res.send({ status: "ok", results: news });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//get id
export const oneNew = async (req, res) => {
  try {
    const { id } = req.params;
    const noticia = await News.findById(id);
    res.send({ noticia });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const oneLegend = async (req, res) => {
  try {
    const { id } = req.params;
    const leyenda = await NewsLeyendas.findById(id);
    res.send({ leyenda });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const oneHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const historia = await NewsHistorias.findById(id);
    res.send({ historia });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const oneEstero = async (req, res) => {
  try {
    const { id } = req.params;
    const estero = await NewsEsteros.findById(id);
    res.send({ estero });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//post
export const postControllersNoticias = async (req, res) => {
  try {
    if (req.file.size < 10000000) {
      const photo = await cloudinary.v2.uploader.upload(req.file.path);
      const { title, category, description, content, date } = req.body;
      const newNews = new News({
        image_url: photo.secure_url,
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
  } catch (error) {
    return alert("ha ocurrido un error");
  }
};

export const postControllersLeyendas = async (req, res) => {
  try {
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
        image_url: photo.secure_url,
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
  } catch (error) {
    return alert("ha ocurrido un error");
  }
};

export const postControllersHistorias = async (req, res) => {
  try {
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
        image_url: photo.secure_url,
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
  } catch (error) {
    return alert("ha ocurrido un error");
  }
};

export const postControllersEsyerosDeliberas = async (req, res) => {
  try {
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
        image_url: photo.secure_url,
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
  } catch (error) {
    return alert("ha ocurrido un error");
  }
};

//put
export const putControllers = (req, res) => {
  const { id } = req.params;

  console.log(id);
  console.log(req.body);
  console.log("método put");
};

//delete
export const deleteControllersNoticias = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await News.findByIdAndDelete(id);
    await cloudinary.v2.uploader.destroy(photo.image_id);
    res.redirect("/noticias");
  } catch (error) {
    return alert("no se ha podido eliminar");
  }
};

export const deleteControllersLeyendas = async (req, res) => {
  try {
    const { id } = req.params;
    const photoLeyenda = await NewsLeyendas.findByIdAndDelete(id);
    await cloudinary.v2.uploader.destroy(photoLeyenda.image_id);
    res.redirect("/");
  } catch (error) {
    return alert("no se ha podido eliminar");
  }
};

export const deleteControllersHistorias = async (req, res) => {
  try {
    const { id } = req.params;
    const photoHistoria = await NewsHistorias.findByIdAndDelete(id);
    await cloudinary.v2.uploader.destroy(photoHistoria.image_id);
    res.redirect("/historias");
  } catch (error) {
    return alert("no se ha podido eliminar");
  }
};

export const deleteControllersEsteros = async (req, res) => {
  try {
    const { id } = req.params;
    const photoEstero = await NewsEsteros.findByIdAndDelete(id);
    await cloudinary.v2.uploader.destroy(photoEstero.image_id);
    res.redirect("/esteros-del-ibera");
  } catch (error) {
    return alert("no se ha podido eliminar");
  }
};
