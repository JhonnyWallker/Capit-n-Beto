import NavTabs from "./NavTabs";
import Swal from "sweetalert2";

function CardsHistorias({ historias }) {
  function confirmDelete(id) {
    {
      Swal.fire({
        title: "Deseas eliminar?",
        text: "No se podrá revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/delete/historia/" + id;
          Swal.fire(
            "Eliminado!",
            "La publicación ha sido eliminada",
            "success"
          );
        }
      });
    }
  }

  const vacio = () => {
    if (historias.length === parseInt(0)) {
      return (
        <div className="d-flex justify-content-center text-white m-3">
          <h5>no hay publicaciones</h5>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="mt-5">
        <NavTabs />
      </div>
      <h5 className="mb-5 mt-5 titulo">
        <a href="/api/historias" className="text-white">
          Historias
        </a>
      </h5>
      <div className="row bg-container-cards position-relative">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger wbadge">
          {historias.length}
          <span class="visually-hidden">unread messages</span>
        </span>
        {vacio()}
        {historias.map((datoApi) => (
          <a
            className="col card-config"
            key={datoApi._id}
            href={`/api/historias/${datoApi._id}`}
          >
            <div className="d-flex justify-content-end mt-1">
              <a className="me-3" href={`/put/${datoApi._id}`}>
                <i class="fa-solid fa-gear iconSetting"></i>
              </a>
              <a
                type="button"
                href="#"
                onClick={() => {
                  confirmDelete(datoApi._id);
                }}
              >
                <i class="fa-solid fa-trash-can iconDelete"></i>
              </a>
            </div>
            <div className="row p-2">
              <div className="col-2">
                <img
                  src={datoApi.image_url}
                  alt={datoApi.titleHistory}
                  title={datoApi.titleHistory}
                  className="img-avatar rounded"
                />
              </div>
              <div className="col-10">
                <h6 className="text-truncate">{datoApi.titleHistory}</h6>
                <h6 className="text-ago ps-2">
                  subido el {datoApi.dateHistory}
                </h6>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <h6 className="text-ago ps-2">hace 1 sem </h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardsHistorias;
