const url = "https://whippo.online/api/noticias";

export async function getAllDatosNoticias() {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    console.log(data.results);
    return data.results.reverse();
  } catch (error) {
    console.log(error);
  }
}