function NavStatus() {
  return (
    <div className="d-flex justify-content-end">
      <ul className="navbar navbar-expand me-5">
        <li className="navbar-brand config-navStatus nav">
          <a href="#" className="text-white">Docs</a>
        </li>
        <li className="navbar-brand text-white config-navStatus nav">
          <a href="#" className="text-white">About</a>
        </li>
        <li className="navbar-brand config-navStatus nav">
        <button type="button" className="btn btn-outline-info">Support</button>
        </li>
      </ul>
    </div>
  );
}

export default NavStatus;
