const url = "https://whippo-eq6x.onrender.com/api/historias";

export async function getAllDatosHistorias() {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    console.log(data.results);
    return data.results.reverse();
  } catch (error) {
    console.log(error);
  }
}