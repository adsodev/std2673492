const texto = document.getElementById("texto");
const colores = ["#FF0000", "#0000FF"];

let indiceColor = 0;

setInterval(() => {
  // Cambiamos el color del texto
  texto.style.color = colores[indiceColor];

  // Cambiamos el índice del color
  indiceColor = (indiceColor + 1) % colores.length;
}, 1000);
