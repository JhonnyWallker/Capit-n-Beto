import { pool } from "../db.js";

//get
export const getControllers = async (req, res) => {
  const [result] = await pool.query(
    "SELECT 'todos los datos desde mysql' AS result"
  );
  res.json(result);
};

//post
export const postControllers = (req, res) => {
  res.send("enviando datos");
};

//put
export const putControllers = (req, res) => {
  res.send("actualizando datos");
};

//delete
export const deleteControllers = (req, res) => {
  res.send("eliminando datos");
};
