function Forms() {
  return (
    <div className="container bg-container-cards">
      <form
        className="m-5"
        action="/post"
        method="post"
        enctype="multipart/form-data"
      >
        <input
          type="text"
          name="title"
          placeholder="Título"
          className="form-control fondo-transparente input-search mb-4"
        />
        <input
          type="text"
          name="content"
          placeholder="Contenido"
          className="form-control fondo-transparente input-search"
        />

        <div class="d-grid gap col-2 mx-auto mt-3">
          <button class="btn btn-dark text-white font-montserrat" type="submit">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
