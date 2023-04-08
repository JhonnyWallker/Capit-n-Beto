import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <div className="nav-tabs-config container">
      <ul className="nav nav-tabs">
        <li className="me-2">
          <Link id="noticias" className="btn btn-dark" to="/noticias">
            Noticias
          </Link>
        </li>
        <li className="me-2">
          <Link
            id="leyenda"
            className="btn btn-dark"
            aria-current="page"
            to="/"
          >
            Leyendas
          </Link>
        </li>
        <li className="me-2">
          <Link id="historias" className="btn btn-dark" to="/historias">
            Historias
          </Link>
        </li>
        <li className="me-2">
          <Link id="esteros" className="btn btn-dark" to="/esteros-del-ibera">
            Esteros del Iberá
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
