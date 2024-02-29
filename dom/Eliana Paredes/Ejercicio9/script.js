const colores = ["#FF0000", "#0000FF"]; // Rojo y azul
let indiceColor = 0;

setInterval(() => {
  const textoIntercalado = document.getElementById("texto-intercalado");
  textoIntercalado.style.color = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
}, 1000); // Cada segundo
