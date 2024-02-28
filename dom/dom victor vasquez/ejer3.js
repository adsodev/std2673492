const texto = document.getElementById("texto");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  // Cambiamos el color del texto
  texto.style.color = "blue";

  // Centramos el texto
  texto.style.textAlign = "center";
});
