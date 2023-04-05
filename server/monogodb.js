import mongoose from "mongoose";

export const mongoConnect = mongoose
  .connect("mongodb+srv://whippo:bIdHpTqXa0fsmE4z@noticias.ypubo8w.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connect to MongoDB Atlas (noticias) 🌱"))
  .catch((error) => console.error(error));

//mongodb+srv://<username>:<password>@prueba.n9d4mmn.mongodb.net/?retryWrites=true&w=majority(...)

//mongodb+srv://whippo:bIdHpTqXa0fsmE4z@noticias.ypubo8w.mongodb.net/?retryWrites=true&w=majority