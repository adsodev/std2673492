const cuadro = document.getElementById("cuadro");

// Función para mover el cuadro a la derecha
function moverDerecha() {
  cuadro.style.left = "50%";
}

// Agregamos un evento 'click' al cuadro
cuadro.addEventListener("click", moverDerecha);
