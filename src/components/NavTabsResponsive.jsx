import { Link } from "react-router-dom";

function NavTabsResponsive() {
  const mostrar = () => {
    document.getElementById("lista-responsive").style.display = "block";
  };

  const ocultar = () => {
    document.getElementById("lista-responsive").style.display = "none";
  };
  return (
    <div className="dropdown">
      <a
        class="fs-1 text-info"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => {
          mostrar();
        }}
      >
        <i class="fa-solid fa-bars"></i>
      </a>
      <ul
        className="list-respons dropdown-menu bg-dark"
        aria-labelledby="dropdownMenuButton1"
        id="lista-responsive"
      >
        <div className="d-flex justify-content-end me-3 bg-dark">
          <a
            className=" font-montserrat bg-dark"
            id="up"
            onClick={() => {
              ocultar();
            }}
          >
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1680635827/boton-eliminar_alsxq9.png"
              alt="cancelar"
              title="cancelar"
              className="boton-cancelar"
            />
          </a>
        </div>
        <li className="me-2">
          <Link
            id="noticias"
            className="dropdown-item text-white"
            to="/noticias"
          >
            Noticias
          </Link>
        </li>
        <li className="me-2">
          <Link
            id="leyenda"
            className="dropdown-item text-white"
            aria-current="page"
            to="/"
          >
            Leyendas
          </Link>
        </li>
        <li className="me-2">
          <Link
            id="historias"
            className="dropdown-item text-white"
            to="/historias"
          >
            Historias
          </Link>
        </li>
        <li className="me-2">
          <Link
            id="esteros"
            className="dropdown-item text-white"
            to="/esteros-del-ibera"
          >
            Esteros del Iberá
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabsResponsive;
