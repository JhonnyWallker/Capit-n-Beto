import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export const mongoConnect = mongoose
  .connect(process.env.mongo_uri)
  .then(() => console.log("Connect to MongoDB Atlas (noticias) 🌱"))
  .catch((error) => console.error(error));

//mongodb+srv://whippo:bIdHpTqXa0fsmE4z@noticias.ypubo8w.mongodb.net/?retryWrites=true&w=majority
