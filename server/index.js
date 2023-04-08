import express from "express";
import morgan from "morgan";
import cors from "cors";
import staticsRoutes from "./routes/statics.routes.js";
import getRoutes from "./routes/get.routes.js";
import postRoutes from "./routes/post.routes.js";
import putRoutes from "./routes/put.routes.js";
import deleteRoutes from "./routes/delete.routes.js";
import { mongoConnect } from "./monogodb.js";
import multer from "multer";
import path from "path";

const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("file"));


//statics
app.use(staticsRoutes);

//Get
app.use(getRoutes);

//Post
app.use(postRoutes);

//Put
app.use(putRoutes);

//Delete
app.use(deleteRoutes);

//conected data bases
mongoConnect;

app.listen(port);
console.log(`listening on port ${port} 💀`);
