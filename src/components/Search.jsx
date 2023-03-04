function Search() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <input
            type="text"
            placeholder="search..."
            className="form-control fondo-transparente input-search"
          />
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-dark text-white button-new">
            add new...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
