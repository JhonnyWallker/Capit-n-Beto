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
import Footer from "./components/Footer";
import NavStatus from "./components/NavStatus";
import SearchInput from "./components/SearchInput";
import Search from "./components/Search";

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

  const escHistorias = () => {
    document.getElementById("form-historias").style.display = "none";
  };

  const escEsterosDelIbera = () => {
    document.getElementById("form-esteros-del-ibera").style.display = "none";
  };

  //filter Esteros
  const [filtroEsteros, setFiltroEsteros] = useState([]);
  const handleChange = (e) => {
    setFiltroEsteros(e.target.value);
    setFiltroNoticias(e.target.value);
    setFiltroLeyendas(e.target.value);
    setFiltroHistorias(e.target.value);
  };

  let esterosFilter = [];
  if (filtroEsteros === undefined) {
    esterosFilter = esteros;
  } else {
    esterosFilter = esteros.filter((esteros) =>
      esteros.titleEsteros.toLowerCase().includes(filtroEsteros)
    );
  }

  //filter noticias
  const [filtroNoticias, setFiltroNoticias] = useState([]);

  let noticiasFilter = [];
  if (filtroNoticias === undefined) {
    noticiasFilter = noticias;
  } else {
    noticiasFilter = noticias.filter((noticias) =>
      noticias.title.toLowerCase().includes(filtroNoticias)
    );
  }

  //filter leyendas
  const [filtroLeyendas, setFiltroLeyendas] = useState([]);

  let leyendasFilter = [];
  if (filtroLeyendas === undefined) {
    leyendasFilter = leyendas;
  } else {
    leyendasFilter = leyendas.filter((leyendas) =>
      leyendas.titleLegends.toLowerCase().includes(filtroLeyendas)
    );
  }

  //filter historias
  const [filtroHistorias, setFiltroHistorias] = useState([]);

  let historiasFilter = [];
  if (filtroHistorias === undefined) {
    historiasFilter = historias;
  } else {
    historiasFilter = historias.filter((historias) =>
      historias.titleHistory.toLowerCase().includes(filtroHistorias)
    );
  }

  return (
    <div>
      <NavStatus />
      <NavBar />
      <div className="container">
        <form
          action="/post/noticias"
          method="post"
          enctype="multipart/form-data"
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
          <label className="font-montserrat m-2 ms-3 text-info fs-5">
            Noticias
          </label>
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
              publicar
            </button>
          </div>
        </form>
        <form
          action="/post/leyendas"
          method="post"
          enctype="multipart/form-data"
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
          <label className="font-montserrat m-2 ms-3 text-info fs-5">
            Leyendas
          </label>
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
          <input type="file" name="file" className="form-control m-3" />
          <input type="date" name="dateLegends" className="form-control m-3" />

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-info">
              publicar
            </button>
          </div>
        </form>
        <form
          action="/post/historias"
          method="post"
          enctype="multipart/form-data"
          id="form-historias"
          className="font-montserrat"
        >
          <a
            className="fondo-transparente d-flex justify-content-end"
            type="button"
            id="esc-historias"
            onClick={() => {
              escHistorias();
            }}
          >
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1680635827/boton-eliminar_alsxq9.png"
              alt="cancelar"
              title="cancelar"
              className="boton-cancelar"
            />
          </a>
          <label className="font-montserrat m-2 ms-3 text-info fs-5">
            Historias
          </label>
          <input
            type="text"
            name="titleHistory"
            placeholder="Título"
            className="form-control m-3"
          />
          <input
            type="text"
            name="categoryHistory"
            placeholder="Categoría"
            className="form-control m-3"
          />
          <div className="row ms-3">
            <textarea
              type="text"
              name="descriptionHistory"
              placeholder="Descripción"
              className="form-control col me-2"
            />
            <textarea
              type="text"
              name="contentHistory"
              placeholder="Contenido"
              className="form-control col"
            />
          </div>
          <input type="file" name="file" className="form-control m-3" />
          <input type="date" name="dateHistory" className="form-control m-3" />

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-info">
              publicar
            </button>
          </div>
        </form>
        <form
          action="/post/esteros-del-ibera"
          method="post"
          enctype="multipart/form-data"
          id="form-esteros-del-ibera"
          className="font-montserrat"
        >
          <a
            className="fondo-transparente d-flex justify-content-end"
            type="button"
            id="esc-esteros-del-ibera"
            onClick={() => {
              escEsterosDelIbera();
            }}
          >
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1680635827/boton-eliminar_alsxq9.png"
              alt="cancelar"
              title="cancelar"
              className="boton-cancelar"
            />
          </a>
          <label className="font-montserrat m-2 ms-3 text-info fs-5">
            Esteros del Iberá
          </label>
          <input
            type="text"
            name="titleEsteros"
            placeholder="Título"
            className="form-control m-3"
          />
          <input
            type="text"
            name="categoryEsteros"
            placeholder="Categoría"
            className="form-control m-3"
          />
          <div className="row ms-3">
            <textarea
              type="text"
              name="descriptionEsteros"
              placeholder="Descripción"
              className="form-control col me-2"
            />
            <textarea
              type="text"
              name="contentEsteros"
              placeholder="Contenido"
              className="form-control col"
            />
          </div>
          <input type="file" name="file" className="form-control m-3" />
          <input type="date" name="dateEsteros" className="form-control m-3" />

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-info">
              publicar
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10 ">
            <SearchInput handleChange={handleChange} />
          </div>
          <div className="col-2 nav">
            <Search />
          </div>
        </div>
      </div>

      <Router>
        <div className="mt-5 mb-5">
          <Routes>
            <Route
              path="/noticias"
              element={<CardsNoticias noticias={noticiasFilter} />}
            />
            <Route
              path="/"
              element={<CardsLeyendas leyendas={leyendasFilter} />}
            />
            <Route
              path="/historias"
              element={<CardsHistorias historias={historiasFilter} />}
            />
            <Route
              path="/esteros-del-ibera"
              element={<CardsEsteros esteros={esterosFilter} />}
            />
          </Routes>
        </div>
      </Router>
      <div className="container mt-5 d-flex justify-content-between">
        <Footer />
      </div>
    </div>
  );
}

export default App;
