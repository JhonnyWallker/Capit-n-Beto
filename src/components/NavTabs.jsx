function NavTabs() {
  return (
    <div className="nav-tabs-config container">
      <ul className="nav nav-tabs">
        <li className="me-2">
          <a id="leyenda" className="btn btn-dark" aria-current="page" href="/">
            Leyendas
          </a>
        </li>
        <li className="me-2">
          <a id="historias" className="btn btn-dark" href="/historias">
            Historias
          </a>
        </li>
        <li className="me-2">
          <a id="esteros" className="btn btn-dark" href="/esteros-del-ibera">
            Esteros del Iberá
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
