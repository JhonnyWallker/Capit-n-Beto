import express from "express";
import morgan from "morgan";
import staticsRoutes from "./routes/statics.routes.js";
import getRoutes from "./routes/get.routes.js";
import postRoutes from "./routes/post.routes.js";
import putRoutes from "./routes/put.routes.js";
import deleteRoutes from "./routes/delete.routes.js";
import { mongoConnect } from "./monogodb.js";

const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
