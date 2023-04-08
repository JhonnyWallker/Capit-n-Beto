const url = "http://localhost:4000/api/esteros-del-ibera";

export async function getAllDatosEsteros() {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    console.log(data.results);
    return data.results.reverse();
  } catch (error) {
    console.log(error);
  }
}