const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 4000;

const response = [
  {
    name: "todos los datos",
    id: 1,
    age: 5,
  },
];

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//statics
app.use("/", express.static("./dist"));
app.use("/historias", express.static("./dist"));
app.use("/esteros-del-ibera", express.static("./dist"));

//Get
app.get("/api", (req, res) => {
  res.json(response);
});

app.listen(port);
console.log(`listening on port ${port} 💀`);
