const btnCrear = document.getElementById("crear");
const contenedor = document.getElementById("contenedor");

btnCrear.addEventListener("click", () => {
  // Creamos un nuevo elemento div
  const nuevoDiv = document.createElement("div");

  // Añadimos el texto al nuevo div
  nuevoDiv.textContent = "Hola mundo";

  // Establecemos el estilo del nuevo div
  nuevoDiv.style.color = "white";
  nuevoDiv.style.backgroundColor = "red";
  nuevoDiv.style.textAlign = "center";

  // Añadimos el nuevo div al contenedor
  contenedor.appendChild(nuevoDiv);
});
