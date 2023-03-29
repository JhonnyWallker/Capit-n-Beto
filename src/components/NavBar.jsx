function NavBar() {
  return (
    <div className=" container text-white fs-1 p-3">
      <div className="row">
        <div className="col-2">
          <h1 className="mt-5">Capitán Beto</h1>
        </div>
        <div className="col-9">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1679948733/pulpoinvertido_lgp1uv.png"
            alt="pizza"
            className="img-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
