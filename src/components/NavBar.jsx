function NavBar() {
  return (
    <>
      <div className=" container text-white fs-1 p-3">
        <a className="row" href="/">
          <div className="col-2">
            <h1 className="mt-4 text-white capitanBeto">Capitán Beto</h1>
          </div>
          <div className="col-9">
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1679948733/pulpoinvertido_lgp1uv.png"
              alt="Capitán Beto"
              className="img-logo"
            />
          </div>
        </a>
        <div className="d-flex justify-content-end">
          <h6>by</h6>
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1680720425/logo-aguara-ia-blanco_akbgbh.png"
            alt="aguará"
            title="aguará"
            className="config-logo-aguara"
          />
        </div>
      </div>
      <hr className="text-white" />
    </>
  );
}

export default NavBar;
