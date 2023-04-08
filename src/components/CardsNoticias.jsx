import NavTabs from "./NavTabs";
import Search from "./Search";

function CardsNoticias({ noticias }) {
  return (
    <div className="container">
      <Search />
      <div className="mt-5">
        <NavTabs />
      </div>
      <h5 className="mb-5 mt-5 titulo">
        <a href="/api/noticias" className="text-white">
          Noticias
        </a>
      </h5>
      <div className="row bg-container-cards position-relative">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger wbadge">
          {noticias.length}
          <span class="visually-hidden">unread messages</span>
        </span>
        {noticias.map((datoApi) => (
          <a
            className="col card-config"
            key={datoApi._id}
            href={`/api/noticias/${datoApi._id}`}
          >
            <div className="row p-2 mt-3">
              <div className="col-2">
                <img
                  src={datoApi.image_url}
                  alt={datoApi.title}
                  title={datoApi.title}
                  className="img-avatar rounded"
                />
              </div>
              <div className="col-10">
                <h6>{datoApi.title}</h6>
                <h6 className="text-ago ps-2">subido el {datoApi.date}</h6>
              </div>
            </div>
            <h6 className="text-ago ps-2">hace 1 sem en eltamborcito.com</h6>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardsNoticias;
