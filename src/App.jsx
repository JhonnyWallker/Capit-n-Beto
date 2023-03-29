import "./App.css";
import CardsLeyendas from "./components/CardsLeyendas";
import CardsHistorias from "./components/CardsHistorias";
import CardsEsteros from "./components/CardsEsteros";
import NavBar from "./components/NavBar";
import NavTabs from "./components/NavTabs";
import Search from "./components/Search";
import * as apiLeyendas from "./services/datosLeyendas";
import * as apiHistorias from "./services/datosHistorias";
import * as apiEsteros from "./services/datosEsteros";
import { useState, useEffect } from "react";
import Timon from "./components/Timon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  return (
    <div>
      <NavBar />
      <Search />
      <div className="mt-5">
        <NavTabs />
      </div>
      
      <Router>
        <div className="mt-5">
          <Routes>
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
