function NavBar() {
  return (
    <>
      <div className="container">
        <a href="/" className="d-block d-sm-none d-flex justify-content-center">
          <div>
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1682616212/whippo-ballena-panel_zudzrt.png"
              alt="Whippo-Panel"
              className="img-logo"
            />
          </div>
        </a>
        <div className="row d-none d-sm-block">
          <div className="col-3">
            <a href="/">
              <div>
                <img
                  src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1682616212/whippo-ballena-panel_zudzrt.png"
                  alt="Whippo-Panel"
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
