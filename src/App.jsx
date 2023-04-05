import "./App.css";
import CardsNoticias from "./components/CardsNoticias";
import CardsLeyendas from "./components/CardsLeyendas";
import CardsHistorias from "./components/CardsHistorias";
import CardsEsteros from "./components/CardsEsteros";
import NavBar from "./components/NavBar";
import * as apiNoticias from "./services/datosNoticias";
import * as apiLeyendas from "./services/datosLeyendas";
import * as apiHistorias from "./services/datosHistorias";
import * as apiEsteros from "./services/datosEsteros";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./components/Forms";

function App() {
  //allDatosLeyendas
  const [leyendas, setLeyendas] = useState([]);

  useEffect(() => {
    apiLeyendas.getAllDatosLeyendas().then(setLeyendas);
  }, []);

  //allDatosHistorias
  const [historias, setHistorias] = useState([]);

  useEffect(() => {
    apiHistorias.getAllDatosHistorias().then(setHistorias);
  }, []);

  //allDatosEsteros
  const [esteros, setEsteros] = useState([]);

  useEffect(() => {
    apiEsteros.getAllDatosEsteros().then(setEsteros);
  }, []);

  //allDatosNoticias
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    apiNoticias.getAllDatosNoticias().then(setNoticias);
  }, []);

  //events
  const escNoticias = () => {
    document.getElementById("form-noticias").style.display = "none";
  };

  const escLeyendas = () => {
    document.getElementById("form-leyendas").style.display = "none";
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <form
          action="/post/noticias"
          method="post"
          id="form-noticias"
          className="font-montserrat"
        >
          <a
            className="fondo-transparente d-flex justify-content-end"
            type="button"
            id="esc-noticias"
            onClick={() => {
              escNoticias();
            }}
          >
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1680635827/boton-eliminar_alsxq9.png"
              alt="cancelar"
              title="cancelar"
              className="boton-cancelar"
            />
          </a>
          <label className="font-montserrat m-2 ms-3 text-info fs-5">Noticia</label>
          <input
            type="text"
            name="title"
            placeholder="Título"
            className="form-control m-3"
          />
          <input
            type="text"
            name="category"
            placeholder="Categoría"
            className="form-control m-3"
          />
          <div className="row ms-3">
            <textarea
              type="text"
              name="description"
              placeholder="Descripción"
              className="form-control col me-2"
            />
            <textarea
              type="text"
              name="content"
              placeholder="Contenido"
              className="form-control col"
            />
          </div>
          <input type="file" name="file" className="form-control m-3" />
          <input type="date" name="date" className="form-control m-3" />

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-info">
              enviar
            </button>
          </div>
        </form>
        <form
          action="/post/leyendas"
          method="post"
          id="form-leyendas"
          className="font-montserrat"
        >
          <a
            className="fondo-transparente d-flex justify-content-end"
            type="button"
            id="esc-leyendas"
            onClick={() => {
              escLeyendas();
            }}
          >
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1680635827/boton-eliminar_alsxq9.png"
              alt="cancelar"
              title="cancelar"
              className="boton-cancelar"
            />
          </a>
          <label className="font-montserrat m-2 ms-3 text-info fs-5">Leyendas</label>
          <input
            type="text"
            name="titleLegends"
            placeholder="Título"
            className="form-control m-3"
          />
          <input
            type="text"
            name="categoryLegends"
            placeholder="Categoría"
            className="form-control m-3"
          />
          <div className="row ms-3">
            <textarea
              type="text"
              name="descriptionLegends"
              placeholder="Descripción"
              className="form-control col me-2"
            />
            <textarea
              type="text"
              name="contentLegends"
              placeholder="Contenido"
              className="form-control col"
            />
          </div>
          <input type="file" name="fileLegends" className="form-control m-3" />
          <input type="date" name="dateLegends" className="form-control m-3" />

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-info">
              enviar
            </button>
          </div>
        </form>
      </div>
      <Router>
        <div className="mt-5">
          <Routes>
            <Route path="/post" element={<Forms />} />
            <Route
              path="/noticias"
              element={<CardsNoticias noticias={noticias} />}
            />
            <Route path="/" element={<CardsLeyendas leyendas={leyendas} />} />
            <Route
              path="/historias"
              element={<CardsHistorias historias={historias} />}
            />
            <Route
              path="/esteros-del-ibera"
              element={<CardsEsteros esteros={esteros} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
