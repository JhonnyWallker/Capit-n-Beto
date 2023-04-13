function SearchInput({ handleChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="search..."
        className="form-control fondo-transparente input-search"
        onChange={handleChange}
      />
    </>
  );
}

export default SearchInput;
