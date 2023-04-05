import News from "../models/noticias.js";
import NewsLeyendas from "../models/leyendas.js";

//get
export const getControllers = async (req, res) => {
  res.send("hola mundo");
};

//post
export const postControllersNoticias = async (req, res) => {
  const newNews = new News({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    content: req.body.content,
    file: req.body.file,
    date: req.body.date,
  });
  await newNews.save();
  console.log(newNews);

  res.redirect("/noticias");
};

export const postControllersLeyendas = async (req, res) => {
  const newLeyendas = new NewsLeyendas({
    titleLegends: req.body.titleLegends,
    categoryLegends: req.body.categoryLegends,
    descriptionLegends: req.body.descriptionLegends,
    contentLegends: req.body.contentLegends,
    fileLegends: req.body.fileLegends,
    dateLegends: req.body.dateLegends,
  });
  await newLeyendas.save();

  res.redirect("/");
};

//put
export const putControllers = (req, res) => {
  res.send("actualizando datos");
};

//delete
export const deleteControllers = (req, res) => {
  res.send("eliminando datos");
};
