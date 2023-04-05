import "./CardsStyles.css";
import NavTabs from "./NavTabs";
import Search from "./Search";

function CardsEsteros({ esteros }) {
  return (
    <div className="container">
      <Search />
      <div className="mt-5">
        <NavTabs />
      </div>
      <h5 className="mb-5 mt-5 titulo">
        <a href="/api" className="text-white">
          Esteros del Iberá
        </a>
      </h5>
      <div className="row bg-container-cards">
        {esteros.map((datoApi) => (
          <a className="col card-config" key={datoApi.id} href="/api">
            <div className="row p-2 mt-3">
              <div className="col-2">
                <img
                  src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1679871651/pulpo_zlvwao.png"
                  alt="avatar"
                  className="img-avatar rounded"
                />
              </div>
              <div className="col-10">
                <h6>{datoApi.name}</h6>
                <h6 className="text-ago ps-2">subido el {datoApi.created}</h6>
              </div>
            </div>
            <h6 className="text-ago ps-2">hace 1 sem en eltamborcito.com</h6>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardsEsteros;
