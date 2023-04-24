function NavBar() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <a href="/">
              <div>
                <img
                  src="http://res.cloudinary.com/dfuguhulh/image/upload/v1682128463/taha7cngvcarrdhxvdjr.png"
                  alt="Capitán Beto"
                  className="img-logo"
                />
              </div>
            </a>
          </div>
          <div className="col-9">
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
        </div>
      </div>
      <hr className="text-white" />
    </>
  );
}

export default NavBar;
