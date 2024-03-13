var colores = ['#ff0000', '#0000ff']; 
var indiceColor = 0;

// Función para cambiar el color del texto cada segundo
setInterval(function() {
  var texto = document.getElementById('texto');
  texto.style.color = colores[indiceColor];
  texto.innerHTML = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length; // Alternar entre los colores
}, 1000); // Cambiar cada segundo (1000 milisegundos)